import prisma from "@/server/prisma";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const namecoint = req.nextUrl.searchParams.get("name");
  if (namecoint === "" || namecoint === null) return NextResponse.json({message: "coint not found" })

  const coints = await prisma.listnamecripto.findMany({
    where: {
      name: {
        startsWith: `${namecoint}`,
      },
    },
  });
 return NextResponse.json({ coints });
}
