const array = [1,2,3,4,5,6,7,8,9];

const removeElement = (arr, ...args) => { 
for (let element of args){
arr.splice(arr.indexOf(element),1);
}
return arr;
}

removeElement(array, 1);
console.log(array);
removeElement(array, 4,5,6);
console.log(array);
removeElement(array, 2);
console.log(array);
removeElement(array, 8,9);
console.log(array);