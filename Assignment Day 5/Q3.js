//ARROW FUNCTIONS:
console.log("ARROW FUNCTIONS:");

//QUESTION 1: Print odd numbers in an arrray

((q3arr) => {
    let res = [];
    for(let i = 0; i < q3arr.length; i++) {
        if (q3arr[i]%2 !== 0)
        res.push(q3arr[i]);
    }
    console.log("The Odd Numbers are: "+res);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]); //1, 3 , 5 , 7, 9

//QUESTION 2: Convert all the strings to title caps in a string arrray

((q3arr) => {
    let res = q3arr.toUpperCase();
    console.log("The upper case string is: "+res);
})("Subham"); // SUBHAM


//QUESTION 3: Sum of all numbers in an arrray

((q3arr) => {
    let sum = 0;
    for(let i = 0; i < q3arr.length; i++) {
        sum += i;
    }
    console.log("The Sum of all the numbers is: "+sum);
})([1, 2, 3, 4, 5]); //10

//QUESTION 4: Return all the prime numbers in an arrray

((q3arr) => {
    let prime = [];
    for(let i = 0; i < q3arr.length; i++) {
        let count = 2;
        for(let j = 2; j < q3arr[i]; j++) {
            if(q3arr[i]%j == 0) {
                count ++;
            } 
        }
        if(count == 2)
        prime.push(q3arr[i]);
    }
    console.log("The Prime Numbers in the arrray are: "+prime);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]); //1,2,3,5,7

//QUESTION 5: Return all the palindromes in an arrray

((q3arr) => {
    let pal = [];
    for(let i = 0; i < q3arr.length; i++) {
        let letters = q3arr[i].split("");
        let flag = 0;
        for(let a = 0, b = letters.length-1; a < letters.length, b > 0; a++, b--) {
            if(letters[a] != letters[b])
            flag++;
        }
        if(flag == 0)
        pal.push(q3arr[i]);
    }
    console.log("Pallindromne: "+pal);
})(["madam", "bird", "1331"]); //madam,1331