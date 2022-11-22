import { DataSource } from "typeorm";
import { password } from "../screte";

export const connectionSource = new DataSource({
    migrationsTableName: 'user_migration_table',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: password,
    database: 'postgres',
    logging: false,
    synchronize: false,
    name: 'user_migration_table',
    "entities": ["src/Entities/**/*.ts"],
    "migrations": ["src/Migrations/**/*.ts"],
    subscribers: ['src/Subscriber/**/*{.ts,.js}'],
});



 