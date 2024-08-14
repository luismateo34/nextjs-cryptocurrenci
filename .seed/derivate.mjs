// @ts-check

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const url = "https://api.coingecko.com/api/v3/derivatives";

const apikey = process.env.API_COINT;
const options = {
  method: "GET",
  headers: { "x-cg-demo-api-key": `${apikey}` },
};

fetch(url, options)
  .then((res) => res.json())
  .then(async (json) => {
    //console.log(json)
    await prisma.derivateCripto.createMany({
      data: json,
      skipDuplicates: true,
    });
  })
  .catch((err) => console.error("error:" + err));
