import prisma from "@/server/prisma";
import { NextResponse } from "next/server";

const url = "https://api.coingecko.com/api/v3/derivatives";

const apikey = process.env.API_COINT
const options = {
  method: "GET",
  headers: { "x-cg-demo-api-key": `${apikey}` },
};

export async function GET() {
fetch(url, options)
  .then((res) => res.json())
  .then(async (json) => {
    //console.log(json)
    await prisma.derivateCripto.createMany({
      data: json,
      skipDuplicates: true,
    });
    return NextResponse.json({update:"Success update"})
  })
  .catch(() =>  NextResponse.json(
      { error: "Error update" },
      { status: 500 }
));
}
