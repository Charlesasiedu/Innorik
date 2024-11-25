const letterCount = (string, letter) =>{
    let count =0;
    for (let i =0; i < string.length; i++){
        if(string[i] === letter)
            count++;
    }
    return count;
    }
    
    const myString = "asdfghjklzxcvbnmqwertyuiopqqaaaaa"
    const myLetter= "a"
    const output=letterCount(myString, myLetter);
    
    console.log(`The Letter ${myLetter} appeared ${output} times in ${myString}`)