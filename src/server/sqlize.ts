import { Sequelize } from "sequelize-typescript";
import pg, { Pool} from "pg";
import { attachDatabasePool } from "@vercel/functions"
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

attachDatabasePool(pool);
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
    pool:{
      max:100,
      min:0,
      idle:1000,
      acquire:2000,
      }
  });

//sqlize.addModels([Listnamecripto, DerivateCripto]);
//----------------------------
if (!globalForSqlize.sqlize) {
  globalForSqlize.sqlize = sqlize;
}
if (process.env.NODE_ENV !== "production") globalForSqlize.sqlize = sqlize;
export default sqlize;
