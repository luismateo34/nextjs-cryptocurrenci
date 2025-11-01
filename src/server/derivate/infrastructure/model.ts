import { Table, Column, Model, CreatedAt, UpdatedAt, PrimaryKey } from "sequelize-typescript";
import { DerivateCriptointerface } from "@/server/derivate/domain/derivate";
import { ormDerivate } from "@/server/derivate/domain/ormderivate";
import sqlize from "@/server/sqlize"
//-------------------------------
@Table
export class DerivateCripto extends Model implements DerivateCriptointerface {
  @Column
  symbol!: string;
  @Column
  volume_24h!: number;
  @Column
  price_percentage_change_24h!: number;
  @Column
  spread!: number;
  @Column
  price!: string;
  @Column
  market!: string;
  @Column
  basis!: number;
  @Column
  contract_type!: string;
  @Column
  expired_at!: number;
  @Column
  funding_rate!: number;
  @Column
  index!: number;
  @PrimaryKey
  @Column({ primaryKey: true })
  index_id!: string;
  @Column
  last_traded_at!: number;
  @Column
  open_interest!: number;
  @CreatedAt
  createdAt!: Date;
  @UpdatedAt
  updatedAt!: Date;
}
sqlize.addModels([DerivateCripto])
export const dataclassQuery: ormDerivate = {
  find_array_derivate: async (page: number) => {
    try {
      const obj = await DerivateCripto.findAndCountAll({
        limit: 20,
        offset: (page - 1) * 20,
      });
      return obj.rows;
    } catch {
      console.log("error");
      return []
    }
  },
  };
