const minutesToSeconds = (number)=>{
    seconds = number*60;
    return (`minutes = ${number} \nSeconds = ${seconds}`);
}
console.log(minutesToSeconds(2));