const repeatString = (string, n) =>{
    let result = "";
    for(let i=0; i < n; i++){
         result += string + ("\n");
    }
       
    return result;
}
console.log(repeatString("hello", 5));