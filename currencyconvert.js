console.log('currencyConvert loaded success')
import { API_KEY_TWO } from './config.js';


const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': API_KEY_TWO,
		'x-rapidapi-host': 'forex-apised1.p.rapidapi.com'
	}
};

const convertBtnEle = document.getElementById('convertBtn')

async function fetchConversions () {
    const projectSevenEle = document.getElementById('project-seven')
    const convertFromEle = projectSevenEle.querySelector('#convert-from')
    const convertToEle = projectSevenEle.querySelector('#convert-to')
    const convertAmountEle = projectSevenEle.querySelector('#convert-amount')
    const convertedResultEle = projectSevenEle.querySelector('#converted-result')
    const currencyCodeEle = projectSevenEle.querySelector('#selected-currency-code')

    const convertFromValue = convertFromEle.value
    const convertToValue = convertToEle.value
    const convertAmountValue = convertAmountEle.value

    try {
        const response = await fetch(`https://forex-apised1.p.rapidapi.com/convert?amount=${convertAmountValue}&from=${convertFromValue}&to=${convertToValue}`, options)
        const data = await response.json()

        const convertedAmountResult = data.rates[convertToValue].converted_amount
        const selectedCurrencyCode = data.rates[convertToValue].currency_code

        currencyCodeEle.textContent = selectedCurrencyCode
        convertedResultEle.textContent = convertedAmountResult.toFixed(2)

        console.log(data)

    } catch (error) {
        console.error('error fetching data:', error)
    }
}

convertBtnEle.addEventListener('click', fetchConversions)

