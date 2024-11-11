import { API_KEY } from './config.js';

const url = 'https://binance43.p.rapidapi.com/ticker/24hr';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'binance43.p.rapidapi.com'
  }
};

async function fetchPrice() {
  const bitcoinPriceDisplayed = document.getElementById('btcPrice')

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error ("Could not fetch price")
    }
    const data = await response.json()
    const currentPrice = parseFloat(data[11].askPrice)
    bitcoinPriceDisplayed.textContent = currentPrice.toFixed(2)
  }
  catch(error) {
    console.error(error)
  }
}

const getBitcoinPriceBtn = document.getElementById('fetchPriceBtn')
getBitcoinPriceBtn.addEventListener('click', fetchPrice)