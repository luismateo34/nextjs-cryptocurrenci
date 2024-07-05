import prisma from "@/server/prisma";
export const dynamic = 'force-dynamic' 
import { NextResponse, type NextRequest } from "next/server";
/*
 *Derivatecripto = 1227 valores
 * 246 paginas de 5 elementos
 * 123 paginas de 10 elementos
 */
export async function GET(req: NextRequest) {
  try {
    const pag = req.nextUrl.searchParams.get("pag");
    if (pag === "" || pag === null)
      return NextResponse.json({ message: "coint not found" });
    const init = (Number(pag) - 1) * 20;
    const derivateCripto = await prisma.derivateCripto.findMany({
      skip: init,
      take: 20,
    });
    return NextResponse.json({ derivateCripto });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
