//Plus One
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// 
// Increment the large integer by one and return the resulting array of digits.
// 
// Constraints:
// 
// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.
// 
// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]

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

// plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//Add Binary

// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

var addBinary = function(a, b) {
    // function reverseString(str){
    //     return str.split("").reverse().join("");
    // };
    // let stringa = reverseString(a);
    // let stringb = reverseString(b);

    function stringInfo(a,b){
        let difference = a.length - b.length;
        let longer;
        let shorter;

        if(difference == 0){ longer = a; shorter = a };
        if(difference > 0){ longer = a; shorter = b };
        if(difference < 0){ longer = b; shorter = a };

        return { longer, shorter, difference };
    };
    
    let str = '';
    for(let i = 0; i < stringInfo.difference; i++){
        str.concat('0');
    };
    let longer = stringInfo.longer;
    let shorter = stringInfo.shorter.reverse();
    shorter = shorter.concat(str);
    shorter = shorter.reverse();

    let leftOver1 = 0;
    let finalSum = '';
    
    for(let i = longer[longer.length-1]; i >= 0; i--){
        var sum;
        sum = longer[i]+shorter[i]+leftOver1;
    
        if(sum == 2){
            finalSum.concat('1');
            if(leftOver1==0){
                leftOver1++;
            } 
        };
        if(sum == 1){
            finalSum.concat('1');
        }
    };
};

var addbinary = function(a, b) {
    let bigInt = BigInt(parseInt(a,2) + parseInt(b,2));
    console.log(bigInt);
    console.log(bigInt.toString(2));
    return bigInt.toString(2);
};
// addbinary('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101','110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011');

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//Sqrt(x)

// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

// Example 1:

// Input: x = 4
// Output: 2

// Constraints:

// 0 <= x <= 231 - 1

