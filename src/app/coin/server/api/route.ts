import { NextResponse, type NextRequest } from "next/server";
import { SanitizedSql } from "@/server/sanitizedSql";
import { facadeCrypto } from "@/server/coint/infrastructure/facades";

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
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
