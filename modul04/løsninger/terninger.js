const util = require('util');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

// Lav en promise-udgave af question - gør det lidt nemmere med 'await'
const question = util.promisify(readline.question).bind(readline);

async function run() {
  // Indhent gæt
  let gæt1 = await question(`Spiller 1: Hvad bliver næste terningekast? `);
  let gæt2 = await question(`Spiller 2: Hvad bliver næste terningekast? `);

  // Kast med terningen
  let terning = Math.floor(Math.random() * 6 + 1);
  console.log(`Der blev kastet ${terning}!`);

  // Find ud af hvor tæt de var på
  let gæt1diff = Math.abs(gæt1 - terning); 
  let gæt2diff = Math.abs(gæt2 - terning); 
  console.log(`Spiller 1 var ${gæt1diff} fra resultatet`);
  console.log(`Spiller 2 var ${gæt2diff} fra resultatet`);

  // Afgør vinderen!
  if (gæt1diff == gæt2diff) {
    console.log("Det blev uafgjort!");
  } else if (gæt1diff < gæt2diff) {
    console.log("Spiller 1 vandt!")
  } else {
    console.log("Spiller 2 vandt!")
  }

  readline.close();
}

run();
