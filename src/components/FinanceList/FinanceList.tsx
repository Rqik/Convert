import React, {FC} from 'react';
import {CurrencyList} from '../../types/currency';
import {FinanceToday} from '../FinanceToday';

interface FinanceListProps {
  curs: CurrencyList
}

const FinanceList: FC<FinanceListProps> = ({curs = {}}) => {
  const itemList = Object.keys(curs).map((el) => {
    return (
      <FinanceToday
        key={curs[el].Previous * curs[el].Value} Name={curs[el].Name}
        CharCode={curs[el].CharCode}
        Value={curs[el].Value}
        Previous={curs[el].Previous}
        Nominal={curs[el].Nominal}
      />)
  })

  return (
    <div className="finance-list">
      {itemList}
    </div>
  )
}
export {FinanceList}
