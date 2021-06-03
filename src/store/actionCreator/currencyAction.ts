import axios from 'axios';
import { Dispatch } from 'redux';
import { CurrencyAction, CurrencyActionTypes } from '../../types/currency';

export const fetchCurrency =
  () => async (dispatch: Dispatch<CurrencyAction>) => {
    try {
      dispatch({ type: CurrencyActionTypes.FETCH_CURRENCY });
      const response = await axios.get(
        'https://www.cbr-xml-daily.ru/daily_json.js',
      );
      dispatch({
        type: CurrencyActionTypes.FETCH_CURRENCY_SUCCESS,
        payload: response.data.Valute,
      });
    } catch (e) {
      dispatch({
        type: CurrencyActionTypes.FETCH_CURRENCY_ERROR,
        payload: 'Произошла ошибка',
      });
    }
  };
