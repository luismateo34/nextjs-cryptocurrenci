import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
import { DerivateCriptointerface } from "@/server/derivate/domain/derivate";
import { ormDerivate } from "@/server/derivate/domain/ormderivate";
import sqlize from "@/server/sqlize";
import { pino } from "pino";
//-------------------------------
@Table
export class DerivateCriptos extends Model implements DerivateCriptointerface {
  @Column
  market!: string;
  @Column
  symbol!: string;
  @Column
  price!: string;
  @Column
  price_percentage_change_24h!: number;
  @Column
  contract_type!: string;
  @Column
  spread!: number;
  @Column
  volume_24h!: number;
  @CreatedAt
  createdAt!: Date;
  @UpdatedAt
  updatedAt!: Date;
}
sqlize.addModels([DerivateCriptos]);
export const dataclassQuery: ormDerivate = {
  find_array_derivate: async (page: number) => {
    try {
      const salt = 20;
      const pageLimit = 20 * page;
      const offsetSalt = salt * (page - 1);

      //const obj = await DerivateCriptos.findAll()
      const obj = await DerivateCriptos.findAll({
	limit: pageLimit,
	offset: offsetSalt,
      });
      return obj;
    } catch (e) {
      pino().info(e)
      return [];
    }
  },
};
