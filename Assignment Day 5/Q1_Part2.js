//ANONYMOUS FUNCTIONS:
console.log("IIFE:");

//QUESTION 1: Print odd numbers in an array

(function getOdd(q12arr) {
    let res = [];
    for(let i = 0; i < q12arr.length; i++) {
        if (q12arr[i]%2 !== 0)
        res.push(q12arr[i]);
    }
    console.log("The Odd Numbers are: "+res);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]); //1, 3 , 5 , 7, 9

//QUESTION 2: Convert all the strings to title caps in a string array

(function caps(q12arr) {
    let res = q12arr.toUpperCase();
    console.log("The upper case string is: "+res);
})("Subham"); // SUBHAM

//QUESTION 3: Sum of all numbers in an array

(function getSum(q12arr) {
    let sum = 0;
    for(let i = 0; i < q12arr.length; i++) {
        sum += i;
    }
    console.log("The Sum of all the numbers is: "+sum);
})([1, 2, 3, 4, 5]); //10

//QUESTION 4: Return all the prime numbers in an array

(function getPrime(q12arr) {
    let prime = [];
    for(let i = 0; i < q12arr.length; i++) {
        let count = 2;
        for(let j = 2; j < q12arr[i]; j++) {
            if(q12arr[i]%j == 0) {
                count ++;
            } 
        }
        if(count == 2)
        prime.push(q12arr[i]);
    }
    console.log("The Prime Numbers in the array are: "+prime);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]); //1,2,3,5,7

//QUESTION 5: Return all the palindromes in an array

(function pallindromes(q12arr) {
    let pal = [];
    for(let i = 0; i < q12arr.length; i++) {
        let letters = q12arr[i].split("");
        let flag = 0;
        for(let a = 0, b = letters.length-1; a < letters.length, b > 0; a++, b--) {
            if(letters[a] != letters[b])
            flag++;
        }
        if(flag == 0)
        pal.push(q12arr[i]);
    }
    console.log("Pallindromne: "+pal);
})(["madam", "bird", "1331"]); //madam,1331

//QUESTION 6: Return median of two sorted arrays of the same size

(function median(q12arr1, q12arr2) {
    let i = 0;
    let j = 0;
    let res = [];

    for(let count = 0; count < (q12arr1.length + q12arr2.length); count++) {
        let index1 = q12arr1[i];
        let index2 = q12arr2[j];

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
    console.log("Median is: " +res[median]);
})([1,3,5,7,9],[2,4,6,8,10]); //5

//QUESTION 7: Remove duplicates from an array
(function duplicate(q12arr) {
    let nonDuplicate = [];
    let count = 1;
    for(let i = 0; i < q12arr.length; i++) {
        for(let j = i+1; j < q12arr.length; j++) {
            if(q12arr[j] == q12arr[i])
            count++;
        }
        if(count === 1)
        nonDuplicate.push(q12arr[i]);
    }
    console.log("New Array: "+nonDuplicate); 
})(["1","2","3","3","4","5","5"]);
//output is not correct

//QUESTION 8: Rotate an array by k times
let rotateArr = function(q12arr, k) {
    for(let i = 0; i<k; i++) {
        q12arr.unshift(q12arr.pop());
    }
    console.log("The original array: "+q12arr);
    console.log("The array after rotating "+k+" times: "+q12arr);
}([1,2,3,4,5],2);

console.log("");