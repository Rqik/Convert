export interface Currency {
  CharCode: string,
  ID: string,
  Name: string,
  Nominal: number,
  NumCode: string,
  Previous: number,
  Value: number,
}

export interface CurrencyList {
  [key: string]: Currency,
}
