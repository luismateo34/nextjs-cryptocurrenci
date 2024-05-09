import prisma from "@/server/prisma";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const pag = req.nextUrl.searchParams.get("pag");
    if (pag === "" || pag === null)
      return NextResponse.json({ message: "coint not found" });
    const init = (Number(pag) - 1) * 30;
    const derivateCripto = await prisma.derivateCripto.findMany({
      skip: init,
      take: 30,
    });
    return NextResponse.json({ derivateCripto });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
