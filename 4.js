const array2 = [1, 2, 3, 4, 5, 6, 7];
const array3 = [1, 6, 7,7,1,5,8];
const cities2 = ['Kiev', 'Ottava', 'Pekin'];
const cities3 = ['Kiev', 'Praga','Stambul'];

const difference = (arr1, arr2) => {
  for (let elem of arr2) {
    if (arr1.includes(elem) === true) {
      arr1.splice(arr1.indexOf(elem), 1);
    }
  }
  return arr1;
};
console.log(difference(array2, array3));
console.log(difference(cities2,cities3));


