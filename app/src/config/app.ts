import express from 'express';
import setRoutes from './routes';
const app = express();

setRoutes(app);

export default app;
