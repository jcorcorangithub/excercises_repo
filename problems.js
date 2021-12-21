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

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

var longestCommonPrefix = function(strs) {
    //look at the value of the first char at the first string
    //loop through each other string and see if the first letter of the first string matches each char at the same index of the other strings
    //if they all match set/add that char as a string variable that will ultimately be returned
    //go on to the next char of the first string and repeat
    let shortest = strs[0].length; 
    
    strs.forEach(str => {
        if(str.length < shortest){
            shortest = str.length;
        };
    });

    let longestCommonPrefix = '';

    for(let i = 0; i < shortest; i++){
        for(let j = 1; j < strs.length; j++){
            if(strs[0][i] != strs[j][i]){
                // console.log(longestCommonPrefix);
                return longestCommonPrefix;
            };
        };
        longestCommonPrefix = `${longestCommonPrefix}${strs[0][i]}`;
    };
    // console.log(longestCommonPrefix);
    return longestCommonPrefix;
};

// longestCommonPrefix(["dog","racecar","car"]);

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//Remove Element

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Constraints:

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100

var removeElement = function(nums, val) {
    // for (let i = 0; i < nums.length; i++) {
        // if(nums[i] == val){
        //     // nums[nums.length-1] = val;
        //     nums.splice(nums[i],1);
        // };
    // };
    nums = nums.filter(num => num != val);
    console.log(nums);
    return nums;
};

removeElement([3,2,2,3], 3);

// const array1 = [1, 2, 3];

// const firstElement = array1.shift();

// console.log(array1);
// console.log(firstElement);