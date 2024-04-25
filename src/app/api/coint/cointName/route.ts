import prisma from "@/server/prisma";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const namecoint = req.nextUrl.searchParams.get("name");
    if (namecoint === "" || namecoint === null)
      return NextResponse.json({ message: "coint not found" });

    const coints = await prisma.listnamecripto.findMany({
      where: {
        name: { equals: `${namecoint}` },
      },
    });

    return NextResponse.json({ coints });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
