import express from 'express';
import { Banker } from '../Entities/Banker';
// import { createQueryBuilder } from 'typeorm';
import { Client } from '../entities/Client';

const router = express.Router();

router.get('/api/client', async (req, res) => {
    console.log('/api/client');

	await Client.find().then((clientData) =>{
        res.json(clientData)
     }).catch(e => console.log(e)
     )

});

export { router as fetchClientsRouter };
