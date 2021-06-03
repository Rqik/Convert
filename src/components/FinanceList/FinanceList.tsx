import React, { ReactElement } from 'react';
import { CurrencyList } from '../../types/currency';
import { FinanceToday } from '../FinanceToday';
import { NominalCard } from '../NominalCard';

interface FinanceListProps {
  curs: CurrencyList;
}

function FinanceList({ curs }: FinanceListProps): ReactElement {
  const itemList = Object.keys(curs).map((el) => {
    return (
      <NominalCard
        key={curs[el].Previous * curs[el].Value}
        Name={curs[el].Name}
        CharCode={curs[el].CharCode}
        Value={curs[el].Value}
        Previous={curs[el].Previous}
        Nominal={curs[el].Nominal}
      />
    );
  });

  /* <FinanceToday
  key={curs[el].Previous * curs[el].Value}
  Name={curs[el].Name}
  CharCode={curs[el].CharCode}
  Value={curs[el].Value}
  Previous={curs[el].Previous}
  Nominal={curs[el].Nominal}
  /> */

  return <div className="finance-list">{itemList}</div>;
}
export { FinanceList };
