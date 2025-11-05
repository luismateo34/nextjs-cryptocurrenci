"use strict";
const { loadEnvFile } = require("node:process");
loadEnvFile("./.env");
const url = "https://api.coingecko.com/api/v3/derivatives";
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
    const resp = await fetch(url, options);
    const json = await resp.json();
    const arrobj = json.map((el) => {
      const obj = {
        contract_type: el.contract_type,
        market: el.market,
        price: el.price,
        price_percentage_change_24h: el.price_percentage_change_24h,
        symbol: el.symbol,
        volume_24h:el.volume_24h,
        spread: el.spread,
        createdAt: new Date(),
	updatedAt: new Date()
      };
      return obj;
    });

    return queryInterface.bulkInsert("DerivateCriptos", arrobj);
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
