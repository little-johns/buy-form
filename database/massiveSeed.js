const Faker = require('faker');
const fs = require('fs');

var tickerMaker = function() {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const tickers = [];
  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      for (let k = 0; k < alphabet.length; k++) {
        for (let l = 0; l < alphabet.length; l++) {
          for (let n = 0; n < alphabet.length; n++) {
            tickers.push(alphabet[i] + alphabet[j] + alphabet[k] + alphabet[l] + alphabet[n])
          }
        }
      }
    }
  } 
  return tickers;
}

const tickers = tickerMaker();

const ws = fs.createWriteStream('data.csv');

function writeTenMillionTimes(writer, encoding, callback) {
  let i = 1;
  function write() {
    let ok = true;
    do {
      const price = Faker.finance.amount(10.00, 400.00)
      var data = i + ',' + tickers[i-1] + ',' + price + '\n'
      i++;
      if (i === 10000000) {
        // last time!
        writer.write(data, encoding, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i <= 10000000 && ok);
    if (i < 10000000) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionTimes(ws, 'utf-8', () => {console.log('done writing')})
