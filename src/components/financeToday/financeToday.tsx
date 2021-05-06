import React, {FC} from 'react';
import './financeToday.scss'
import {Number, priceChange} from '../number/number';

export interface FinanceTodayProps {
  Name: string,
  CharCode: string,
  Value: number,
  Previous: number,
  Nominal: number
}

const FinanceToday: FC<FinanceTodayProps> = ({Name, CharCode, Value, Previous, Nominal}) => {


  let valueChange: priceChange = Value < Previous ? 'decreased' : 'increased'
  let previousChange: priceChange = Value > Previous ? 'decreased' : 'increased'
  let difference = Math.round((Value - Previous) * 10000) / 10000
  console.log(Value - Previous)
  return (
    <div className="finance">
      <div className="finance__currency">
        <div className="finance__name">{Name}</div>
        <div className="finance__abbreviation">{CharCode}</div>
      </div>

      <div className="finance__current-value">
        <div className="finance__today">
          <Number number={Value} difference={difference}
                  priceChange={valueChange}/>
          <div className="finance__caption">цена сегодня</div>
        </div>
        <div className="finance__tomorrow">
          <Number number={Previous} size="font-small"/>
          <div className="finance__caption">цена вчера</div>
        </div>
        <div className="finance__ratio">{
          Nominal+ CharCode + ' / 1RUB'
        }</div>
      </div>

    </div>)
}

export {FinanceToday}
