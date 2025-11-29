/* var v=10;

switch (v) {
    case 1:
        console.log("this is case : 1");
        
        break;
    case 2:
        console.log("This is case : 2");
        break;

    case 10:
        console.log("This is case 10");
        break;    
        
    default:
        console.log("This is default case");
        
        break;
}


for(var i=1;i<=10;i++){
    debugger;
    console.log("8 X "+i+" = "+8*i);
    
}

const func=()=>{
    var myName="Ajay";

    function func1(){
        var lastName="Kumar"
    }

    // console.log(lastName);
    
}

// console.log(myName);
func();

// default parameters

function product(a=55,b) {
    console.log(`a: ${a} ,b: ${b}`);
    
    return a*b;
}

console.log(product(2));


function product1(a,b=55) {
    console.log(`a: ${a} ,b: ${b}`);
    
    return a*b;
}

console.log(product1(2));
 */
var myArray = ["Ajay", "Aman", "Anju", "Tiwari", "Deepu"];

/* for (var e in myArray) {
  console.log(myArray[e]);
} */

// for (var x of myArray) console.log(x);

/* console.log(`The last element is ${myArray[myArray.length]}`);

myArray.forEach((element, index, array) => {
  console.log(`Element is : ${element} and the index is : ${index}`);
});

const arr = myArray.map((element) => {
  return `I am ${element}`;
});

console.log(arr);
console.log(typeof arr[0]);

myArray.forEach((element, index, array) => console.log(`Element is : ${element} and the index is : ${index}`));
console.log(myArray);
 */
/* //! push,pop,unshift,shift

console.log(myArray.push("Rashu"));
console.log("Original array: "+myArray);
console.log(myArray.pop());
console.log("Original array: "+myArray);
console.log(myArray.unshift("Start"));
console.log("Original array: "+myArray);
console.log(myArray.shift());
console.log("Original array: "+myArray); */

//! splice method

/* console.log(myArray.splice(2,0,"Akash","Lucky")); //!to add element
console.log("Original array: "+myArray);
 */
// console.log(myArray.splice(2, 2)); //!To delete element starting from index 2 and the no. of element to be deleted is 2
/* 
console.log("Original array: "+myArray);
console.log(myArray.splice(2,2,"X","Y","Z"));//!To delete and add element starting from index 2 and the no. of element to be deleted is 2 

console.log("Original array: "+myArray); */

//?find and findIndex method

//* find will return the first element satisfying the condition else undefined
/* const val=myArray.find(x=> x.length>4);

console.log(val);


const val1=myArray.find((x)=>{
    return  x.length>6;
});

console.log(val1); */

/* const val=myArray.findIndex(x=> x.length>4);

console.log(val);


const val1=myArray.findIndex((x)=>{
    return  x.length>6;
});

console.log(val1); */

// ? filter

/* 
const newArray=myArray.filter(x=>x.length>4);
console.log(newArray);
 */
/* // !Example 2: Filtering Products by Price
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 300 },
  { name: "Smartwatch", price: 150 },
];

const filteredObject=products.filter(x=>x.price>400);

console.log(filteredObject);

 */

const numbers = [100, 12, 3, 41, 16, 5, 6, 707, 8, 9];
/* // ! Filter unique values

const filteredVal=numbers.filter((e,index,array)=>{
    return array.indexOf(e)==index;
});

console.log(filteredVal); */

//? Sorting array

// console.log(numbers.sort()); String based sorting is done by-default

// !Sorting in ascending order of number

// console.log(numbers.sort((a,b)=>a-b));

// ! Descending order
// console.log(numbers.sort((a, b) => b - a));

/* if(a<b) return -1 No Pswap 

if(a>b) return 1 swap

a=b -> 0 No operation

a is first element and b is second so we have to decide if a<b then swap means b will come first which means descending order

 */

//! Using map to square each number and create a new array
/* const arr = numbers.map((x) => x ** 2);
console.log(arr); */

//! 1: Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.
// Original array of strings
/* const words = ["APPLE", "banana", "cherry", "date"];

const capWords=words.map(x=>x.toUpperCase());

console.log(capWords); */

//! 2: Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.

// Original array of numbers
/* const num = [1, 2, 3, 4, 5];
const sqArray = num.filter((x) => x % 2 == 0).map((x) => x * x);
console.log(sqArray); */

//! 3: Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr. ".

/* const names = ["ram", "vinod", "laxman"];
const prefName=names.map(x=>"Mr. "+x);
console.log(prefName); */

/* // ? Reduce method
const productPrice = [100, 200, 300, 400, 500];
const totalPrice=productPrice.reduce((acc,e)=>{
 return acc+e;   
});
console.log(totalPrice); */

// ! =============== String ====================
/* let text = "My name is \" Thapa Technical \" & I am a Full Stack Developer. ";

console.log(text);

console.log(Array.from(text));
 */

let poem="The doctor is here.The poet is here.The master is here";
/* console.log(poem.indexOf("The"));
console.log(poem.indexOf("the"));
console.log(poem.lastIndexOf("the"));
console.log(poem.lastIndexOf("The")); */







