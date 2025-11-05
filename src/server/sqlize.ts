import { Sequelize } from "sequelize-typescript";
import pg from "pg";

class SqlizeSingleton {
  static instance: Sequelize;
  static getInstance() {
    if (!SqlizeSingleton.instance) {
      SqlizeSingleton.instance = new Sequelize(process.env.DATABASE_URL, {
        dialect: "postgres",
        dialectModule: pg,
        pool: {
          max: 100,
          min: 0,
          idle: 1000,
          acquire: 2000,
        },
      });
    }
    return SqlizeSingleton.instance;
  }
}

const sqlize = SqlizeSingleton.getInstance()
export default sqlize
