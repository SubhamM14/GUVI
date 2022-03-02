//ANONYMOUS FUNCTIONS:
console.log("ANONYMOUS FUNCTIONS:");

//QUESTION 1: Print odd numbers in an array

let res = [];
function getOdd(q11arr) {
    for(let i = 0; i < q11arr.length; i++) {
        if (q11arr[i]%2 !== 0)
        res.push(q11arr[i]);
    }
    return res;
} 

console.log("The Odd Numbers are: "+getOdd([1, 2, 3, 4, 5, 6, 7, 8, 9])); //1, 3 , 5 , 7, 9

//QUESTION 2: Convert all the strings to title caps in a string array

function caps(q11arr) {
    let res = q11arr.toUpperCase();
    return res;
}

console.log("The upper case string is: "+caps("Subham")); // SUBHAM

//QUESTION 3: Sum of all numbers in an array

let sum = 0;
function getSum(q11arr) {
    for(let i = 0; i < q11arr.length; i++) {
        sum += i;
    }
    return sum;
} 

console.log("The Sum of all the numbers is: "+getSum([1, 2, 3, 4, 5])); //10

//QUESTION 4: Return all the prime numbers in an array

let prime = [];
function getPrime(q11arr) {
    for(let i = 0; i < q11arr.length; i++) {
        let count = 2;
        for(let j = 2; j < q11arr[i]; j++) {
            if(q11arr[i]%j == 0) {
                count ++;
            } 
        }
        if(count == 2)
        prime.push(q11arr[i]);
    }
    return prime;
} 

console.log("The Prime Numbers in the array are: "+getPrime([1, 2, 3, 4, 5, 6, 7, 8, 9])); //1,2,3,5,7

//QUESTION 5: Return all the palindromes in an array

let pal = [];
function pallindromes(q11arr) {
    for(let i = 0; i < q11arr.length; i++) {
        let letters = q11arr[i].split("");
        let flag = 0;
        for(let a = 0, b = letters.length-1; a < letters.length, b > 0; a++, b--) {
            if(letters[a] != letters[b])
            flag++;
        }
        if(flag == 0)
        pal.push(q11arr[i]);
    }
    return pal;
}

console.log("Pallindromne: "+pallindromes(["madam", "bird", "1331"])); //madam,1331

//QUESTION 6: Return median of two sorted arrays of the same size

function median(q11arr1, q11arr2) {
    let i = 0;
    let j = 0;
    let res = [];

    for(let count = 0; count < (q11arr1.length + q11arr2.length); count++) {
        let index1 = q11arr1[i];
        let index2 = q11arr2[j];

        if(index1 < index2) {
            res[count] = index1;
            i++;
        }
        else {
            res[count] = index2;
            j++; 
        }
    }
    let median = parseInt((res.length/2 + (res.length/2)-1)/2); 
    return res[median];
}

console.log("Median is: " + median([1,3,5,7,9],[2,4,6,8,10])); //5

//QUESTION 7: Remove duplicates from an array
let nonDuplicate = [];
let count = 1;
function duplicate(q11arr) {
    for(let i = 0; i < q11arr.length; i++) {
        for(let j = i+1; j < q11arr.length; j++) {
            if(q11arr[j] == q11arr[i])
            count++;
        }
        if(count == 1)
        nonDuplicate.push(q11arr[i]);
    }
    return nonDuplicate; 
}

console.log("New Array: "+duplicate(["1","2","3","3","4","5","5"]));
//output is coming as undefined

//QUESTION 8: Rotate an array by k times
let rotateArray = function(q11arr, k) {
    for(let i = 0; i<k; i++) {
        q11arr.unshift(q11arr.pop());
    }
    return q11arr;
}
let q11arr = [1,2,3,4,5];
let k = 3;
console.log("The original array: "+q11arr);
console.log("The array after rotating "+k+" times: "+rotateArray(q11arr,k));

console.log("");
