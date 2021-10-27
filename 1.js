const array = [1,2,3,4,5,6,7,8,9];

const removeElement = (arr, elem) => { 
arr.splice(arr.indexOf(elem),1);
return arr;
}

removeElement(array, 4);
console.log(array);
removeElement(array, 1);
console.log(array);
removeElement(array, 2);
console.log(array);
removeElement(array, 8);
console.log(array);



