import { Express, Router } from "express";
import routes from '../../routes';

export default (app: Express): void => {
  app.use('/api', routes);
}
