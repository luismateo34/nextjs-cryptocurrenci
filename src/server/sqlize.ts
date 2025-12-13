import { Sequelize } from "sequelize-typescript";
import pg from "pg";

class SequelizeSingleton {
  static instance: SequelizeSingleton
  private sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: "postgres",
        dialectModule: pg,
        pool: {
          max: 100,
          min: 0,
          idle: 1000,
          acquire: 2000,
        },
      })
  static getInstance() {
    if (!SequelizeSingleton.instance) {
      SequelizeSingleton.instance =  new SequelizeSingleton()}
    return SequelizeSingleton.instance;
  }
  get orm(){
    return this.sequelize
  }
}

const sqlize = SequelizeSingleton.getInstance().orm
export default sqlize
