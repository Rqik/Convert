import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CurrencyActionCreator from '../store/actionCreator/currencyAction';

export const useAction = (): any => {
  const dispatch = useDispatch();
  return bindActionCreators(CurrencyActionCreator, dispatch);
};
