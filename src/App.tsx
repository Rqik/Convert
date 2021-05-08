import React, {useEffect} from 'react';
import {Input} from './components/Input';
import {FinanceList} from './components/FinanceList';
import {useTypeSelector} from './hooks/useTypedSelector';
import {useAction} from './hooks/useAction';

function App() {
  const {currency, error, loading} = useTypeSelector(state => state.currency)
  const {fetchCurrency} = useAction()

  useEffect(() => {
    fetchCurrency()
  }, [])


  if (loading) {
    return <div>Идет загрузка</div>
  }

  if (error) {
    return <h1>Упс произошла ошибка {error}</h1>
  }

  return (
    <div className="App">
      <FinanceList curs={currency}/>
      <Input/>
    </div>
  );
}

export default App;
