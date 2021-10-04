function sumTalrække(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumTalrække(0,10));
console.log(sumTalrække(1,3)); // Skal udskrive 6
console.log(sumTalrække(2,5)); // Skal udskrive 14
