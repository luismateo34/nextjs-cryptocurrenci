export interface DerivateCriptointerface {
  market: string;
  symbol: string;
  price: string;
  price_percentage_change_24h: number;
  contract_type: string;
  spread?: number;
  volume_24h: number;
}
export interface derivateJson {
  derivateCripto: DerivateCriptointerface[];
}
