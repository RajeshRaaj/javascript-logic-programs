
/*Sorting Methods*/ 
document.write("<h3>Merge Sort</h3>");
 function merge_sort(left,right) 
{
	var i = 0;
	var j = 0;
	var results = [];

	while (i < left.length || j < right.length) {
		if (i === left.length) {
			// j is the only index left part
			results.push(right[j]);
			j++;
		} 
      else if (j === right.length || left[i] <= right[j]) {
			results.push(left[i]);
			i++;
		} else {
			results.push(right[j]);
			j++;
		}
	}
	return results;
}

document.write(merge_sort([1,3,5,7,10], [2,4,6,8,9]));
document.write("<br>");
document.write("<hr>");
/*------------------------END-----------------------------------------*/
//Arrange String in alphabetical order
document.write("<h3>Arrange String in alphabetical order</h3>");
function sortString(str){
  var arr = str.split('');
  var tmp;
  for(var i = 0; i < arr.length; i++){
    for(var j = i + 1; j < arr.length; j++){
      /* if ASCII code greater then swap the elements position*/
      if(arr[i] > arr[j]){
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr.join('');
}
document.write(sortString("apple"));
document.write("<br>");
document.write("<hr>");
/*------------------------END-----------------------------------------*/

//Print String in reverse 
document.write("<h3>Printing String in reverse order</h3>");
function reverseString(str){
	var newStr = "";

	for(let i=str.length -1; i >= 0; i--){
		newStr += str[i];
	}
	return newStr;
}
document.write(reverseString("hello"));
document.write("<br>");
document.write("<hr>");
/*------------------------END-----------------------------------------*/
//Print Palindrome 
document.write("<h3>Palindrome</h3>");
function palindrome(string) {
    var len = string.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
document.write(palindrome("madam"));
document.write("<hr>");
/*------------------------END------------------------------------*/
//Print Fibonacci Series
document.write("<h3>Fibonacci Series</h3>");
var fibonacci = function fibonacciSeries(no) {
var n = [1, 1];
while (n[n.length-1] + n[n.length-2] <= no) {
n.push(n[n.length-1] + n[n.length-2]);
}
// console.log(n);
return n
};
document.write(fibonacci(55));
document.write("<br>");
document.write("<hr>");
/*------------------------END-----------------------------------------*/

//Count Numbers when button clicks
var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};
/*-------------------------END----------------------------------------*/


//Print Even and Odd Numbers
document.write("<h3>Even and Odd Numbers</h3>");
function printEvenOdd(num){
if(num%2 ===0){
	document.write("Nummber is Even" +num);
}
else{
	document.write("Number is Odd" +num);
}
}
console.log(printEvenOdd(100));
document.write("<br>");
document.write("<hr>");
/*---------------------------END--------------------------------------*/

//Print Even and Odd nnumber with length of given number
document.write("<h3>Even and Odd number with length of given number</h3>");
function printEven(num){
	for(let i=0; i<num; i++){
		if(i%2 === 0){
			document.write(i+" "+ "is Even Number.");
			document.write("<br>");
		}
		else{
			document.write(i+" "+ "is Odd Number.");
			document.write("<br>");
		}
	}
}
console.log(printEven(100));

	document.write("<br>");
	document.write("<hr>");
/*------------------------END-----------------------------------------*/






