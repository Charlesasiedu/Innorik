const multiplyArrays=(numbers)=>{
    product=1;
    for(let i=0; i < numbers.length; i++){
        product *=numbers[i];
    }
    return product
}
//  testing
const checkProduct = [2,3,4,4];
console.log(multiplyArrays(checkProduct));