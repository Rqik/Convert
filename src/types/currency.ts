export interface Currency {
  CharCode: string;
  ID: string;
  Name: string;
  Nominal: number;
  NumCode: string;
  Previous: number;
  Value: number;
}

export interface CurrencyList {
  [key: string]: Currency;
}

export interface CurrencyState {
  error: null | string;
  loading: boolean;
  currency: CurrencyList;
}

export enum CurrencyActionTypes {
  FETCH_CURRENCY = 'FETCH_CURRENCY',
  FETCH_CURRENCY_SUCCESS = 'FETCH_CURRENCY_SUCCESS',
  FETCH_CURRENCY_ERROR = 'FETCH_CURRENCY_ERROR',
}

interface FetchCurrencyAction {
  type: CurrencyActionTypes.FETCH_CURRENCY;
}

interface FetchCurrencySuccessAction {
  type: CurrencyActionTypes.FETCH_CURRENCY_SUCCESS;
  payload: any;
}

interface FetchCurrencyErrorAction {
  type: CurrencyActionTypes.FETCH_CURRENCY_ERROR;
  payload: string;
}

export type CurrencyAction =
  | FetchCurrencyAction
  | FetchCurrencyErrorAction
  | FetchCurrencySuccessAction;
