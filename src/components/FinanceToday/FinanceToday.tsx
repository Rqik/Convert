import React, { FC, ReactElement } from 'react';
import { Number, priceChange } from '../Number/Number';

export interface FinanceTodayProps {
  Name: string;
  CharCode: string;
  Value: number;
  Previous: number;
  Nominal: number;
}

function FinanceToday({
  Name,
  CharCode,
  Value,
  Previous,
  Nominal,
}: FinanceTodayProps): ReactElement {
  const valueChange: priceChange = Value < Previous ? 'decreased' : 'increased';
  // const previousChange: priceChange =
  //   Value > Previous ? 'decreased' : 'increased';
  const difference = Math.round((Value - Previous) * 10000) / 10000;

  return (
    <div className="finance">
      <div className="finance__currency">
        <div className="finance__name">{Name}</div>
        <div className="finance__abbreviation">{CharCode}</div>
      </div>

      <div className="finance__current-value">
        <div className="finance__today">
          <Number
            number={Value}
            difference={difference}
            priceChange={valueChange}
          />
          <div className="finance__caption">цена сегодня</div>
        </div>
        <div className="finance__tomorrow">
          <Number number={Previous} size="font-small" />
          <div className="finance__caption">цена вчера</div>
        </div>
        <div className="finance__ratio">
          <div className="finance__ratio-span">
            {`${Nominal}&nbsp;${CharCode}`}
          </div>
          1 RUB
        </div>
      </div>
    </div>
  );
}

export { FinanceToday };
