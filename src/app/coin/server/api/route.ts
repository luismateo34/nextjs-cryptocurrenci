import { NextResponse, type NextRequest } from "next/server";
import { SanitizedSql } from "@/server/sanitizedSql";
import { facadeCrypto } from "@/server/coint/infrastructure/facades";
import pino from "pino";

export async function GET(req: NextRequest) {
  const namecoin = req.nextUrl.searchParams.get("name");
  const namecointSanitized = SanitizedSql(namecoin);
  if (namecoin === "" ||  typeof namecoin !== "string" ) {
    return NextResponse.json({ message: "coint not found" });
  }
  try {
    const coins = await facadeCrypto.find_cryptos_by_Names(namecointSanitized);
    return NextResponse.json({ coins });
  } catch {
    const logger = pino().child({ origen: "coint server api"})
    logger.info("error en la busqueda")
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
