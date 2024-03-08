// @ts-check

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const url = "https://api.coingecko.com/api/v3/coins/list";
const options = {
  method: "GET",
  headers: { "x-cg-demo-api-key": "CG-BWqAE8awtCSzBdWSGU6fFWWT" },
};

fetch(url, options)
  .then((res) => res.json())
  .then(async (json) => {
    await prisma.listnamecripto.createMany({
      data: json,
      skipDuplicates: true,
    });
  })
  .catch((err) => console.error("error:" + err));
