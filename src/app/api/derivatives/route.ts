import prisma from "@/server/prisma";
import { NextResponse, type NextRequest } from "next/server";

import { SanitizedSql } from "@/server/sanitizedSql";
/*
 *Derivatecripto = 1227 valores
 * 246 paginas de 5 elementos
 * 123 paginas de 10 elementos
 * 62 paginas con painacion de 20
 */
export async function GET(req: NextRequest) {
  try {
    const pag = req.nextUrl.searchParams.get("pag");
    const pagSanity = SanitizedSql(pag);
    if (pag === "" || pag === null) {
      return NextResponse.json({ message: "coint not found" });
    }
    const init = (Number(pagSanity) - 1) * 20;
    const derivateCripto = await prisma.derivateCripto.findMany({
      skip: init,
      take: 20,
      cacheStrategy: { swr: 60, ttl: 60 },
    });
    return NextResponse.json({ derivateCripto });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
