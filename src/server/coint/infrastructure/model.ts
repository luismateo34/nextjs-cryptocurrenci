import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  PrimaryKey
} from "sequelize-typescript";
import { ListnamecriptoInterface } from "@/server/coint/domain/coint";
import { Op } from "sequelize";
import { ormCrypt } from "@/server/coint/domain/orm";
import sqlize from "@/server/sqlize"
import { pino} from "pino";

@Table({ tableName:"Listnamecriptos"})
export class Listnamecriptos extends Model implements ListnamecriptoInterface {
  @PrimaryKey
  @Column({ primaryKey: true })
  id_coint!: string;
  @Column
  symbol!: string;
  @Column
  name!: string;
  @CreatedAt
  createdAt!: Date;
  @UpdatedAt
  updatedAt!: Date;
}
sqlize.addModels([Listnamecriptos])
export const dataclassQuery: ormCrypt = {
  getCryptos_name: async (name: string) => {
    try {
      const obj = await Listnamecriptos.findAndCountAll({
        where: {
          name: {
            [Op.startsWith]: name,
          },
        },
      });
      return obj.rows;
    } catch(e) {
      pino().info(e)
      return [];
    }
  },
};
