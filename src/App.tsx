import React, {useEffect, useState} from 'react';
import {Input} from './components/input/input';
import {FinanceTodayProps} from './components/financeToday/financeToday';
import {CurrencyList} from './type/interface';
import {FinanceList} from './components/financeList/financeList';
import axios from 'axios';


function App() {

  const [cbr, setCbr] = useState<CurrencyList>({})

  useEffect(() => {
    fetchValute()
  }, [])

  async function fetchValute() {
    try {
      let result = await axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`)
      setCbr(result.data.Valute)
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <div className="App">
      <FinanceList curs={cbr}/>
      <Input/>
    </div>
  );
}

export default App;
