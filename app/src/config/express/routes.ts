import { Express, Router } from "express";
import version from '../../routes';

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router);
  app.use('/api/v1', version.v1)
}
