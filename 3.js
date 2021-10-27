const array = [1,2,3,4,5,6,7,1];
const array2 = [1,2,3,4,5,1,5,5,6,7,1];
const array3 = [1,7,8,9,2,3,4,5,6,7,1];




const unique = (arr)=>{
    const unic = [];
for( let element of arr){
    if(unic.includes(element) === false){
        unic.push(element);
    }
}
return unic;
}

console.log(unique(array));
console.log(unique(array2));
console.log(unique(array3));