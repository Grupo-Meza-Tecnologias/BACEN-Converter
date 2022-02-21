'use strict'

const moment = require('moment')
const axios = require('axios')

let currencies = []

/**
 * Retrieves all currencies from the API of BACEN and
 * assignes to the currencies internal object for later usage.
 * 
 * @returns {Promise<Array>}
 */
const loadCurrencies = () => {
    return axios
        .get('https://www3.bcb.gov.br/bc_moeda/rest/moeda/data')
        .then(({ data }) => currencies.push(...data))
}

/**
 * Converts the given amount from the given currency to the given target currency.
 * 
 * @param {Number} value The value to be converted in float (number)
 * @param {String} from The currency to be converted from in three letters (e.g., "USD")
 * @param {String} to The currency to be converted to (e.g., "BRL")
 * @param {String} date The date to be used to calculate the conversion rate (defaults to Today-date)
 * 
 * @returns {Promise<Number>} The converted value in float (Promise-based)
 */
const convertRate = async (value = 1, from = 'BRL', to = 'USD', date = null) => {
    if (currencies.length === 0) {
        console.log('Loading currencies...')
        await loadCurrencies()
    }

    const isoDate = date ? date : moment().format('YYYY-MM-DD')
    const fromCode = currencies.find(({ sigla }) => sigla === from).codigo
    const toCode = currencies.find(({ sigla }) => sigla === to).codigo
    const baseURL = 'https://www3.bcb.gov.br/bc_moeda/rest/converter'
    const fullURL = `${baseURL}/${value}/1/${fromCode}/${toCode}/${isoDate}`
    return axios.get(fullURL).then(({ data }) => data.value)
}

module.exports = {
    currencies,
    convertRate,
}