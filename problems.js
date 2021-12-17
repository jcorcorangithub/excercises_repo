var plusOne = function(digits) {
    
    let myString = '';
    digits.forEach(digit => {
        myString = `${myString}${digit.toString()}`;
    });
    let largeInteger = BigInt(myString);
    largeInteger++;
    
    let final = [];

    largeInteger = largeInteger.toString();
    
    for(let i = 0; i < largeInteger.length; i++) {
        final.push(largeInteger[i]);
    };
    console.log(final);
    return final;
};

plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);