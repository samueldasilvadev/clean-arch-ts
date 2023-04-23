import express from 'express';
import setRoutes from './routes';

import setupTypeorm from '../typeorm/index';
const app = express();

setupTypeorm();
setRoutes(app);

export default app;
