import { NextResponse, type NextRequest } from "next/server";
import {facadeDerivate } from "@/server/derivate/infrastructure/facades";
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
    if (pag === "" || pag === null) {
      return NextResponse.json({ message: "coint not found" });
    }
    const Sanity = SanitizedSql(pag);
    const derivateCripto = await  facadeDerivate.find_derivate_by_Names(Number(Sanity))
    return NextResponse.json({ derivateCripto });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
