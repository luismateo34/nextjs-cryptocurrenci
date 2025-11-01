"use strict";
const { loadEnvFile } = require("node:process");
const { UpdatedAt } = require("sequelize-typescript");
loadEnvFile("./.env");
const url = "https://api.coingecko.com/api/v3/coins/list";
const apikey = process.env.API_COINT;
const options = {
  method: "GET",
  headers: { "x-cg-demo-api-key": `${apikey}` },
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      const arrobj = json.map((el) => {
        const obj = {
          id_coint: el.id,
          name: el.name,
          symbol: el.symbol,
	  createdAt: new Date(),
	  updatedAt: new Date()
        };
        return obj;
      });

      return queryInterface.bulkInsert("Listnamecriptos", arrobj);
    } catch {
      console.error("error seeder");
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
