# BACEN Converter

This API allows you to convert values between currencies using the public services of BACEN - Banco Central of Brazil. Almost all currencies of the world are accepted (USD, BRL, CAD, etc).  
  
### Simple usage

```javascript
const { convertRate } = require('bacen-converter');

// After resolved prints the 1000 BRL converted to USD with today's rate
convertRate(1000.0, 'USD', 'BRL').then(console.log);
```

You can also specify a date and the API will use it's rate as below.

```javascript
const { convertRate } = require('bacen-converter');

// Prints the value converted USD to BRL using rate of day 2021-07-03
convertRate(1000.0, 'USD', 'BRL', '2021-07-03').then(console.log);
```

### Donation

If you want to contribute to author, donate using PayPal to e-mail pitter@meza.digital. Any value is appreciated. Hope you find this project useful. :-)