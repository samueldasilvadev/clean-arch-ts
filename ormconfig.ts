import { DataSourceOptions } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

const devConfig: DataSourceOptions = {
  type: "mysql",
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'root',
  database: process.env.DB_NAME || 'arch',
  port: Number(process.env.DB_PORT) || 3306,
  migrations: [
    './src/database/migrations/**.ts'
  ],
  entities: [
    './src/app/domains/entities/**.ts',
  ],
  synchronize: false,
  logging: false,
}

export default devConfig;
