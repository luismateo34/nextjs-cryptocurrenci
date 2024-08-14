import prisma from "@/server/prisma";
export const dynamic = "force-dynamic";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const namecoint = req.nextUrl.searchParams.get("name");
    if (namecoint === "" || namecoint === null)
      return NextResponse.json({ message: "coint not found" });

    const coints = await prisma.listnamecripto.findMany({
      where: {
        name: {
          startsWith: `${namecoint}`,
        },
      },
      cacheStrategy: { swr: 60, ttl: 60 },
    });
    return NextResponse.json({ coints });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
