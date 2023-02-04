import { DataSource } from "typeorm";
import "dotenv/config"

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    logging: true,
    synchronize: false,
    entities: ['src/entities/*.ts'],
    migrations: ['src/migrations/*.ts']
})

// AppDataSource.initialize()
//     .then(() => {
//         console.log("data source initialized");
//     })
//     .catch((err) => {
//         console.error("Error during Data Source initialization", err);
// });

export default AppDataSource