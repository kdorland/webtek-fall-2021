// En funktion der tager et array af tal som input. Funktionen skal returnerer summen af alle tal.
function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log(arraySum([1, 2, 3, 4, 5]));


// En funktion der tager et array med tekst som input. Funktionen skal returnerer summen af længderne på alle tekster i arrayet.
function textArraySum(array) {
  let sum = 0;
  for (let text of array) {
    sum += text.length;
  }
  return sum;
}
console.log(textArraySum(["hej", "dav", "hejsa"]));

// En funktion der tager to arrays, og returnerer et nyt langt array hvor elementer fra de to arrays er sat sammen. Fx bliver [1, 2, 3] og [4, 5, 6] til [1, 2, 3, 4, 5, 6].

function sætArraysSammen(array1, array2) {
  let result = [];
  for (let elm of array1) {
    result.push(elm);
  }
  for (let elm of array2) {
    result.push(elm);
  }
  return result;
}

console.log(sætArraysSammen([1,2,3], [4,5,6]));

// En funktion der tager to arrays med samme længde, og hvor begge indeholder tal. Funktionen skal returnerer et nyt array hvor tallene er lagt parvis sammen. Fx hvis du har [1, 2, 3] og [4, 5, 6], så giver det [5, 7, 9] når de er lagt sammen.

function plusToArrays(array1, array2) {
  let nyArray = [];
  for (let i = 0; i < array1.length; i++) {
    nyArray.push(array1[i] + array2[i]);
  }
  return nyArray;
}
console.log(plusToArrays([1,2,3], [5,5,5]));

// En funktion der tager et array med tekst som input. Funktionen skal returnere den længste tekst i arrayet.

function længsteTekst(array) {
  let længsteOrd = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > længsteOrd.length) {
      længsteOrd = array[i];
    }
  }
  return længsteOrd;
}
console.log(længsteTekst(["hej", "davs", "hejsa", "hi"]));
