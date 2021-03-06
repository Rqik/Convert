import React, { ReactElement } from 'react';
import './Number.scss';

export type priceChange = 'increased' | 'decreased';
type size = 'font-big' | 'font-small';

interface NumberProps {
  number: number | string;
  difference?: number;
  priceChange?: priceChange;
  size?: size;
}

function Number({
  number,
  difference,
  priceChange,
  size,
}: NumberProps): ReactElement {
  return (
    <div
      className={`number ${priceChange && `number_${priceChange}`}
       ${size && `number_${size}`}`}
    >
      {number}
      {difference && <div className="number__difference"> {difference}</div>}
    </div>
  );
}

export { Number };
