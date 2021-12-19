import { useState, useEffect } from "react";

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const api = () => {
    const url = "https://api.coinpaprika.com/v1/tickers";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCoins(data);
        setLoading(false);
      });
  };
  useEffect(api, []);
  console.log(coins);
  return (
    <div id="coin">
      <h1>Coins {!loading && `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div id="coinListContainer">
          <ul id="coinList">
            {coins.map((coin) => (
              <li key={coin.id}>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Coin;
