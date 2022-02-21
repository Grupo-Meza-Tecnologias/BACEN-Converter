# BACEN Converter

This API allows you to convert values between currencies using the public services of BACEN - Banco Central of Brazil. Almost all currencies of the world are accepted (USD, BRL, CAD, etc).  
  
### Simple usage

```
const { convertRate } = require('bacen-converter');

// After promise is resolved it will print the 1000 BRL converted to USD
convertRate(1000.0, 'USD', 'BRL').then(console.log);
```

Also you can opt to inform which day you want to get the rating value from as described in the example below.

```
const { convertRate } = require('bacen-converter');

// After resolved it will print the value converted using rate of day 2021-07-03
convertRate(1000.0, 'USD', 'BRL', '2021-07-03').then(console.log);
```

### Contributing

If you want to contribute and thanks the author, donate using PayPal to e-mail pitter@meza.digital. Any value is appreciated. Hope you make a great use of this open-source project.