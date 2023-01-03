import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/table/Table';

export type PriceData = {
  asset: string;
  price: string;
};
type FetchData = {
  id: string;
  result: PriceData[];
  status: number;
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [prices, setPrices] = useState([] as Array<Array<PriceData>>);
  const handlerClick = async () => {
    setIsLoading(true);
    setIsError(false);
    setPrices([]);
    const response = await fetch(
      `https://63b3e9425901da0ab38a2bf8.mockapi.io/api/v1/prices`,
      {
        method: 'GET',
        headers: { 'content-type': 'application/json;charset=UTF-8' },
      }
    );
    if (response.ok === true) {
      const data = await response.json();
      data.forEach((el: FetchData) => {
        if (el.status === 0) {
          setPrices((prev) => [...prev, el.result]);
        }
      });
    } else {
      setIsError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    if (isChecked) {
      const timer = setTimeout(() => {
        handlerClick();
      }, 3000);
      return () => clearTimeout(timer);
    }
  });

  return (
    <div className='App'>
      <div className='App-main'>
        {isLoading && <p>Data is loading</p>}
        {prices.length === 0 && !isLoading && (
          <p>No data. Press the Refresh button.</p>
        )}
        {isError && <p>Something going wrong. Try again later.</p>}
        {prices.length > 0 && <Table data={prices} />}
        <button onClick={handlerClick} className='App-Btn-prices'>
          Refresh
        </button>
        <div className='Checkbox'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
            value='Auto-update'
            id='auto-ref'
          />
          <label htmlFor='auto-ref'>Auto update</label>
        </div>
      </div>
    </div>
  );
}

export default App;
