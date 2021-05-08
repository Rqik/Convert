import axios from 'axios';
import {CurrencyAction, CurrencyActionTypes} from '../../types/currency';
import {Dispatch} from 'redux';

export const fetchCurrency = () => {
  return async (dispatch: Dispatch<CurrencyAction>) => {
    try {
      dispatch({type: CurrencyActionTypes.FETCH_CURRENCY})

      let response = await axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`)
      dispatch({
        type: CurrencyActionTypes.FETCH_CURRENCY_SUCCESS,
        payload: response.data.Valute
      })
    } catch (e) {
      dispatch({type: CurrencyActionTypes.FETCH_CURRENCY_ERROR, payload: 'Произошла ошибка'})
    }
  }
}
