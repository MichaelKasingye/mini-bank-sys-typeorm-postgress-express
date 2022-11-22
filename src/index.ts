import { DataSource } from "typeorm";
import express  from "express";
import { User } from "./Entities/User";
import { password } from "./screte";
import { Client } from "./Entities/Client";
import { Banker } from "./Entities/Banker";
import { Transaction } from "./Entities/Transaction";
import { createUserRouter } from "./Routes/UserRoutes";
import { createBankerRouter } from "./Routes/create_banker";
import { createTransactionRouter } from "./Routes/create_transaction";
import { deleteClientRouter } from "./Routes/delete_client";
import { fetchClientsRouter } from "./Routes/fetch_clients";
import { createClientRouter } from "./Routes/create_client";
import { connectBankerToClientRouter } from "./Routes/connect_banker_to_client";

//connecting to data base
//cange this to dotenv
const connectDB =  new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: password,
    database: "postgres",
    entities:[User, Banker, Client, Transaction],
    synchronize:false
})
connectDB
    .initialize()
    .then(() => {
        console.log(`Data Source has been initialized`);
    })
    .catch((err) => {
        console.error(`Data Source initialization error`, err);
    })

//create express app
const app = express()
    //middle ware
app.use(express.json());
app.use(createUserRouter);
app.use(createBankerRouter);
		app.use(connectBankerToClientRouter);
		app.use(createTransactionRouter);
		app.use(deleteClientRouter);
		app.use(fetchClientsRouter);
		app.use(createClientRouter);

    app.listen(8080,()=> {
        console.log('app is listening')
    })


export default connectDB;
