const db = require('./index.js');
const Stock = require('./Stock.js');
var readline = require('readline');
var fs = require('fs');

// fs.readFile('./data.txt', function(err, data) {
//   if (err) {
//     console.log(err)
//   }
//   var bigData = [];
//   var docs = data.toString().split('\n')

//   for (let i = 0; i < docs.length-1; i++) {
    
//     bigData.push(JSON.parse(docs[i]))
    
//     if (bigData.length === 50000){
//       Stock.insertMany(bigData)
//         .then(() => {
//           bigData = [];
//           console.log('50000 inserted')
//         })
//         .catch(err => {
//           console.log(err)
//         })
//     }
//   }

// })

var rl = readline.createInterface({
  input: fs.createReadStream('./data.txt'),
  output: process.stdout,
  terminal: false
})

rl.on('line', function (line) {
  line = JSON.parse(line);
  // let c = 0
  // console.log(line)
  // if (data.length === 10000) {
  //   console.log('10000')
  Stock.create(line)
  //     .then(() => {
        // data = [];
  //       console.log(c++)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  }
)

// rl.on('close', function () {
//   process.exit()
// })
