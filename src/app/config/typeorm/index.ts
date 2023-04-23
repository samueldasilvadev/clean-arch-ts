import "reflect-metadata";
import { DataSource } from "typeorm";
import ormConfig from '../../../../ormconfig';

export default () => {
  const AppDataSource = new DataSource(ormConfig);
  AppDataSource.initialize()
    .then(() => {
      console.log("connect to database...");
    })
    .catch((e) => {
      console.log(e);
    });
}
