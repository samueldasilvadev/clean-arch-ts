import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import setRoutes from './routes';

import setupDatabase from '../typeorm/index';
const app = express();

setupDatabase();
setRoutes(app);

export default app;
