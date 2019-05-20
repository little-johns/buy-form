# Little Johns

A full-stack stock buying application. This repo is for the buy form.

## Related Projects

  - https://github.com/little-johns/stock-chart
  - https://github.com/little-johns/Price-Paid-Average-Service
  - https://github.com/little-johns/news

## Usage

- Seed the Mongo database and start the Express server by running 'npm run start'
- Create a webpack bundle by running 'npm run webpack-dev'
- Navigate to localhost:8080/stocks/* where * is a number from 1-10000000 if you've seeded with 10M stocks
- The buy form should display that stock's ticker symbol and price
- Run 'npm run test' to run tests

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## API - to read a stock's price

**READ**

```sh
GET - /api/stocks/:stockId
```
