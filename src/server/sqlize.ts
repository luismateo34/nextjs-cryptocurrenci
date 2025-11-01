import { Sequelize } from "sequelize-typescript";
import pg from "pg";
//import { Listnamecripto } from "@/server/coint/infrastructure/model";
//import { DerivateCripto } from "@/server/derivate/infrastructure/model";

//---singleton
const globalForSqlize = global as unknown as {
  sqlize: Sequelize;
};
//-------------
const sqlize =
  globalForSqlize.sqlize ??
  new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    dialectModule: pg,
  });

//sqlize.addModels([Listnamecripto, DerivateCripto]);
//----------------------------
if (!globalForSqlize.sqlize) {
  globalForSqlize.sqlize = sqlize;
}
if (process.env.NODE_ENV !== "production") globalForSqlize.sqlize = sqlize;
export default sqlize;
