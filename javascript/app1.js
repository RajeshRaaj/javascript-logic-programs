/*1. Write a JavaScript function to check whether an `input` is an array or not*/ 
var is_array = function(input){
    if(toString.call(input) === "[object Array]")
        return true;
        return false;
    }
console.log(is_array('rajesh'));
console.log(is_array([1,2,3,4,5]));
/*---------------END--------------------*/ 

/*2. Write a JavaScript function to clone an array*/ 
var arr_Clone = (arr1) => arr1.slice(0);
console.log(arr_Clone([1,2,3,4]));
console.log(arr_Clone([1, 2, [4, 0]]));
/*---------------END--------------------*/ 

/*3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.*/
var first =  (array, n) => {
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
};

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3)); 
/*---------------END--------------------*/ 

/*4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.*/
var last = function last(array, n) {
    if (array == null) return void 0;
    if (n == null) return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
  };
  
  console.log(last([7, 9, 0, -2]));
  console.log(last([7, 9, 0, -2], 3));
  console.log(last([7, 9, 0, -2], 6)); 
  /*---------------END--------------------*/ 

/*5. Write a simple JavaScript program to join all elements of the following array into a string.*/
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));
 /*---------------END--------------------*/

/*6. Create a simple multiplication table asking the user the number of rows and columns he wants.*/
var rows = prompt("How many rows for your multiplication table?");
var cols = prompt("How many columns for your multiplication table?");
if(rows == "" || rows == null)
        rows = 10;
if(cols== "" || cols== null)
        cols = 10;
createTable(rows, cols);
function createTable(rows, cols)
{
  var j=1;
  var output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
  for(i=1;i<=rows;i++)
  {
    output = output + "<tr>";
    while(j<=cols)
    {
        output = output + "<td>" + i*j + "</td>";
         j = j+1;
       }
        output = output + "</tr>";
        j = 1;
}
output = output + "</table>";
document.write(output);
}
 /*---------------END--------------------*/
/*7.Write a JavaScript function to find the longest common starting substring in a set of strings.
Sample array : console.log(longest_common_starting_substring(['go', 'google']));*/ 
function longest_common_starting_substring(arr1){
    const arr= arr1.concat().sort();
    const a1= arr[0];
    const a2= arr[arr.length-1];
    const L= a1.length;
    let i= 0;
    while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
    return a1.substring(0, i);
  }
  
  console.log(longest_common_starting_substring(['go', 'google'])); 
  
  console.log(longest_common_starting_substring(['SQLInjection', 'SQLTutorial'])); 
  
  console.log(longest_common_starting_substring(['abcd', '1234']));
/*---------------END--------------------*/

/*8. Write a JavaScript program to find the most frequent item of an array.*/ 
const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let mf = 1;
let m = 0;
let item;
for (let i=0; i<arr1.length; i++)
{
        for (let j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(`${item} ( ${mf} times ) `) ;
/*---------------END--------------------*/

/*9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.*/ 
var str = 'c';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const result = [];
  
  for(let x=0; x<str.length; x++)
  {
    if(UPPER.includes(str[x]))
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.includes(str[x]))
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
console.log(result.join(''));

/*---------------END--------------------*/

/*10. Write a JavaScript program which prints the elements of the following array.*/ 
//Note:Use nested for loops
  // a sample 2-D array 
const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
for (const i in a) 
{
   console.log(`row ${i}`);
   for (const j in a[i]) 
     {
      console.log(` ${a[i][j]}`);
     }
}
/*---------------END--------------------*/

/*11. Write a JavaScript program to find the sum of squares of a numeric vector.*/ 
function sum_sq(array) {
    var sum = 0,
        i = array.length;
    while (i--) {
      sum += Math.pow(array[i], 2);
    }return sum;
  }
  
  console.log(sum_sq([0, 1, 2, 3, 4]));
/*---------------END--------------------*/

/*12. Write a JavaScript program to compute the sum and product of an array of integers.*/ 
const array = [1, 2, 3, 4, 5, 6];
let s = 0;
let p = 1;
let i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log(`Sum : ${s} Product :  ${p}`);
/*---------------END--------------------*/

/*13. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).*/
function removeDuplicates(num) {
    let x;
    const len=num.length;
    const out=[];
    const obj={};
  
    for (x=0; x<len; x++) {
      obj[num[x]]=0;
    }
    for (x in obj) {
      out.push(x);
    }
    return out;
  }
  const Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
  result = removeDuplicates(Mynum);
  console.log(Mynum);
  console.log(result);
  
/*---------------END--------------------*/

/*14. Write a JavaScript program to display the colors in the following way:*/ 
/*
  Here is the sample array:
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Output
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
-
*/ 
const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function Ordinal(n)
 {
  const o = ["th","st","nd","rd"];
  const x = n%100;
  return x+(o[(x-20)%10]||o[x]||o[0]);
 }

for(n = 0; n < color.length; n++){
 const ordinal = n + 1;

 const output = (`${Ordinal(ordinal)} choice is ${color[n]}.`);

console.log(output);
}
/*---------------END--------------------*/

/*16. Find the leap years in a given range of years.*/
function leap_year_range(st_year, end_year) {
    const year_range = [];
    for (let i = st_year; i <= end_year; i++)
    {
         year_range.push(i);
    }
    const new_array = [];

year_range.forEach(
year => { 
  if (test_LeapYear(year)) 
  new_array.push(year);
});

return new_array;
 }

function test_LeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
    } else {
            return false;
    }
}

console.log(leap_year_range(2000,2012));
/*---------------END--------------------*/

/*17. Write a JavaScript program to shuffle an array.*/ 
function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));

/*---------------END--------------------*/

/*
  18. Write a JavaScript program to perform a binary search.

Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.


Sample array: 
var items = [1, 2, 3, 4, 5, 7, 8, 9];
Expected Output: 
console.log(binary_Search(items, 1)); //0 
console.log(binary_Search(items, 5)); //4
*/ 
function binary_Search(items, value){
    let firstIndex  = 0;
    let lastIndex   = items.length - 1;
    let middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

    return (items[middleIndex] != value) ? -1 : middleIndex;
}
const items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));   
console.log(binary_Search(items, 5));
/*---------------END--------------------*/

/*
  19. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.

Sample array: 
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output: 
[4, 5, 8, 10, 12, 13]
*/ 
function Arrays_sum(array1, array2) 
{
  const result = [];
  let ctr = 0;
  let x=0;

  if (array1.length === 0) 
   return "array1 is empty";
  if (array2.length === 0) 
   return "array2 is empty";   

 while (ctr < array1.length && ctr < array2.length) 
  {
    result.push(array1[ctr] + array2[ctr]);
    ctr++;
  }

 if (ctr === array1.length) 
 {
    for (x = ctr; x < array2.length; x++)   {
      result.push(array2[x]);
    }
  } 
  else
  {
  for (x = ctr; x < array1.length; x++) 
    {
      result.push(array1[x]);
    }
  }
  return result;
}

console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));
/*---------------END--------------------*/

/*20. Write a JavaScript program to find duplicate values in a JavaScript array.*/
function find_duplicate_in_array(arra1) {
    const object = {};
    const result = [];

    arra1.forEach(item => {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (const prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
    }

    return result;

}

console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));
/*---------------END--------------------*/
