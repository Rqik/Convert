/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactElement, SyntheticEvent, useRef, useState } from 'react';

interface NominalCardTypes {
  Name: string;
  CharCode: string;
  Value: number;
  Previous: number;
  Nominal: number;
}

function NominalCard({
  Name,
  CharCode,
  Value,
  Previous,
  Nominal,
}: NominalCardTypes): ReactElement {
  const [rect, setRect] = useState<any>(0);

  const backGradRef = useRef<HTMLDivElement>(null);
  const borderGradRef = useRef<HTMLDivElement>(null);

  React.useEffect((): void => {
    setRect((prev: any): any => {
      return backGradRef.current?.getBoundingClientRect();
    });
  }, []);

  function handle(e: React.MouseEvent): void {
    console.log('2123');
  }

  const handelMouseEvent = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (backGradRef.current && borderGradRef.current) {
      const coords = backGradRef.current?.getBoundingClientRect();
      const centerX = coords.width / 2 + coords.left;
      const centerY = coords.height / 2 + coords.top;
      const rad =
        Math.atan2(e.clientY - centerY, e.clientX - centerX) - Math.PI / 2;

      backGradRef.current.style.borderImageSource = `linear-gradient(${rad}rad,
        rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, .2) 30%,rgba(255, 255, 255, 0)100%`;

      borderGradRef.current.style.borderImage = `linear-gradient(${
        rad - Math.PI
      }rad, #fff -1.73%, rgba(255, 255, 255, 0) 31.92%)27`;
    }
  };

  const removeStyles = (): void => {
    if (backGradRef.current && borderGradRef.current) {
      backGradRef.current.style.borderImageSource = '';
      borderGradRef.current.style.borderImage = '';
    }
  };
  const difference = Math.round((Value - Previous) * 10000) / 10000;
  return (
    <div
      className="nominal-card"
      onClick={handle}
      onMouseMove={handelMouseEvent}
      onMouseLeave={removeStyles}
    >
      <div className="nominal-card__background">
        <div ref={backGradRef} className="nominal-card__fon" />
        <div className="nominal-card__blur" />
        <div className="nominal-card__noise" />
        <div ref={borderGradRef} className="nominal-card__gradient" />
        <div
          className={`nominal-card__odds ${
            difference >= 0 ? 'nominal-card__odds_increase' : ''
          }`}
        />
      </div>
      <div className="nominal-card__content">
        <div className="nominal-card__currency">
          <div className="nominal-card__name">{Name}</div>
          <div className="nominal-card__charcode">
            <span className="nominal-card__span">
              {`${Nominal} ${CharCode}`}
            </span>
            1 RUB
          </div>
        </div>
        <div className="nominal-card__subordinate">
          <div className="nominal-card__today">
            <div className="nominal-card__difference">{difference}</div>
            <div className="nominal-card__value">{Value}</div>
            <div className="nominal-card__caption">цена сегодня</div>
          </div>
          <div className="nominal-card__tomorrow">
            <div className="nominal-card__previous">{Previous}</div>
            <div className="nominal-card__caption">цена вчера</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { NominalCard };
