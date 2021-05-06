import React, {FC} from 'react';
import {Currency, CurrencyList} from '../../type/interface';
import {FinanceToday} from '../financeToday/financeToday';
import './financeList.scss'
interface FinanceListProps{
  curs: CurrencyList
}
const FinanceList: FC <FinanceListProps> = ({curs={}}) => {


  const itemList = Object.keys(curs).map((el)=>{
    console.log(curs)
    return <FinanceToday key={curs[el].Previous*curs[el].Value} Name={curs[el].Name}
                         CharCode={curs[el].CharCode}
                         Value={curs[el].Value}
                         Previous={curs[el].Previous}
                         Nominal={curs[el].Nominal}
    />
  })

  return (
    <div className="finance-list">

      {itemList}

    </div>
    // currency.map((el: string) => {
    //   return <FinanceToday name={el.Name}
    //                        abbreviation={el.CharCode}
    //                        Value={el.Value}
    //                        Previous={el.Previous}/>
    //
    // }
    // )
  )
}
export {FinanceList}
