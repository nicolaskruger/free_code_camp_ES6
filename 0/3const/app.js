const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
    [2, 5, 7].forEach((element,i) => {
        s[i] = element;
    });
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
console.log();