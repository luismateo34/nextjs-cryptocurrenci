import prisma from "@/server/prisma";
export const dynamic = "force-dynamic";
import { NextResponse, type NextRequest } from "next/server";
import { SanitizedSql } from "@/server/sanitizedSql";

export async function GET(req: NextRequest) {
  const namecoint = req.nextUrl.searchParams.get("name");
  const namecointSanitized = SanitizedSql(namecoint);
  if (namecoint === "" || namecoint === null) {
    return NextResponse.json({ message: "coint not found" });
  }
  try {
    const coints = await prisma.listnamecripto.findMany({
      where: {
        name: {
          startsWith: `${namecointSanitized}`,
        },
      },
      cacheStrategy: { swr: 60, ttl: 60 },
    });
    return NextResponse.json({ coints });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
