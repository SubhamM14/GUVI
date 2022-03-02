//Function Warmups

//addFive
var num1 = 10;
function addFive(num) { 
    return num + 5;
}
var result = addFive(num1);
console.log(result); //15

//getOpposite
var num2 = 5;
function getOpposite(num) {
    if(typeof(num) === "number")
    return num * -1;
    else
    return -1;
}
var result = getOpposite(num2);
console.log(result); //-5

//toSeconds
var min = 5;
function toSeconds(min) {
    return min*60;
}
var secs = toSeconds(min)
console.log(secs); //300

//toInteger
var mystr = "5";
function toInteger(mystr) {
    return parseInt(mystr);
}
var myint = toInteger(mystr);
console.log(myint); //5

//nextNumber
var myint = 0;
function nextNumber(myint) {
    return ++myint;
}
var myNextint = nextNumber(myint);
console.log(myNextint); //1

//getFirstElement
var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0];
}
var data = getFirstElement(arr);
console.log(data); //1

//hourToSeconds
var arr = [1, 2, 3];
function hourToSeconds(arr) {
    let result =[];
    for(let i = 0; i<arr.length; i++){
        result.push(arr[i]*60*60);
    }
    return result;
}
var data = hourToSeconds(arr);
console.log(data); //3600 7200 10800

//findPerimeter
function findPerimeter(h,w) {
    return 2*(h+w);
}
var peri = findPerimeter(6,7);
console.log(peri); //26

//lessThan100
function lessThan100(numb1,numb2) {
    if(numb1+numb2 < 100) return true;
    else return false;
}
var result = lessThan100(22,15);
console.log(result); //true

//remainder
function remainder(n1,n2) {
    return n1%n2;
}
var result = remainder(1,3)
console.log(result); //1

//CountAnimals
function CountAnimals(tur,horse,pigs) {
    return tur*2+horse*4+pigs*4;
}
var legs = CountAnimals(2,3,5);
console.log(legs); //36

//frames
function frames(nu1,nu2) {
    return nu1*60*nu2;
}
var fps = frames(1,2)
console.log(fps); //120

//divisibleByFive
function divisibleByFive(num) {
    if(num%5 == 0) return true; 
    else return false;
}
var divisible = divisibleByFive(5);
console.log(divisible); //true

//isEven
function isEven(num){
    if(typeof num != 'number')
    return -1;
    else {
        if(num%2 == 0) return true;
        else return false;
    }
   }
var even = isEven(5);
console.log(even); //false

//areBothOdd
function areBothOdd(number1, number2){
    if(number1%2 == 0 | number2%2 == 0) return false;
    else return true;
}

console.log(areBothOdd(1, 3)); //true

//getFullName
function getFullName(firstName, lastName){
    if(firstName == null) return lastName;
    else if(lastName == null) return firstName;
    else if (firstName == null && lastName == null) return null;
    else return firstName + " " + lastName;

}
console.log(getFullName("Subham","Mukherjee")); //Subham Mukherjee

//getLengthOfWord
function getLengthOfWord(word){
    return word.length;
}
console.log(getLengthOfWord("Subham")); //6

//isSameLength
function isSameLength(word1, word2){
    if(word1.length != word2.length) return false;
    else return true;
}
console.log(isSameLength("guvi","geek")); //true

console.log("");
