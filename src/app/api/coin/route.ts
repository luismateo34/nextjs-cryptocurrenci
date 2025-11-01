import { NextResponse, type NextRequest } from "next/server";
import { SanitizedSql } from "@/server/sanitizedSql";
import { facadeCrypto } from "@/server/coint/infrastructure/facades";

export async function GET(req: NextRequest) {
  const namecoint = req.nextUrl.searchParams.get("name");
  const namecointSanitized = SanitizedSql(namecoint);
  if (namecoint === "" ||  typeof namecoint !== "string" ) {
    return NextResponse.json({ message: "coint not found" });
  }
  try {
    const coints = await facadeCrypto.find_cryptos_by_Names(namecointSanitized);
    return NextResponse.json({ coints });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
