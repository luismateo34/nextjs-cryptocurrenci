-- CreateTable
CREATE TABLE "DerivateCripto" (
    "market" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "index_id" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "price_percentage_change_24h" INTEGER NOT NULL,
    "contract_type" TEXT NOT NULL,
    "index" INTEGER,
    "basis" INTEGER NOT NULL,
    "spread" INTEGER,
    "funding_rate" INTEGER NOT NULL,
    "open_interest" INTEGER,
    "volume_24h" INTEGER NOT NULL,
    "last_traded_at" INTEGER NOT NULL,
    "expired_at" INTEGER,

    CONSTRAINT "DerivateCripto_pkey" PRIMARY KEY ("index_id")
);
