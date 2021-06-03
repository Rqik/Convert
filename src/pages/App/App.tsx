import React, { useEffect } from 'react';
import { Input } from '../../components/Input';
import { FinanceList } from '../../components/FinanceList';
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';

function App(): React.ReactElement {
  const { currency, error, loading } = useTypeSelector(
    (state) => state.currency,
  );

  const { fetchCurrency } = useAction();

  function fuc(el: any): void {
    console.log(el);
  }

  useEffect(() => {
    fetchCurrency();
    fuc(currency);
  }, []);

  if (loading) {
    return <div>Идет загрузка</div>;
  }

  if (error) {
    return (
      <h1>
        Упс произошла ошибка
        {error}
      </h1>
    );
  }

  return (
    <div className="app">
      <FinanceList curs={currency} />
    </div>
  );
}

export { App };
