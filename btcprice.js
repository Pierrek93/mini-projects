import { API_KEY_ONE } from './config.js';

const url = 'https://binance43.p.rapidapi.com/ticker/24hr';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': API_KEY_ONE,
    'x-rapidapi-host': 'binance43.p.rapidapi.com'
  }
};

async function fetchPrice() {
  const bitcoinPriceDisplayed = document.getElementById('btcPrice')
  const xrpPriceDisplayed = document.getElementById(`xrpPrice`)

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error ("Could not fetch price")
    }
    const data = await response.json()
    console.log(`data here`, data)
    const currentBtcPrice = parseFloat(data[11].askPrice)
    const currentXrpPrice = parseFloat(data[306].askPrice)
    bitcoinPriceDisplayed.textContent = currentBtcPrice.toFixed(2)
    xrpPriceDisplayed.textContent = currentXrpPrice.toFixed(2)
  }
  catch(error) {
    console.error(error)
  }
}

const getBitcoinPriceBtn = document.getElementById('fetchPriceBtn')

getBitcoinPriceBtn.addEventListener('click', fetchPrice)

// document.addEventListener(`DOMContentLoaded`, function () {
//   fetchPrice();
// })