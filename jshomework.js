/*1. Given a string. Check whether the string is palindrome or not.
Input Output

“racecar” “yes”
“T” “Yes”
“” “No”
“palindrome” “No”*/
let string = "racecar";

function checkPalindrome(str) {
  let ispalindrome = "yes";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1] {
        ispalindrome = "No";
        break
      }

    }
    return ispalindrome
  }
  console.log(checkPalindrome(string));

 /* 3. Print the following number pattern (write a function)
1
12
123
1234
12345
1234
123
12
1
    */
function printRow(number) {
  let row = "";
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      row += j;
   
    }
  console.log(row)
  row = "";

  }
  for (let i = number - 1; i >= 1; i--){
  let row = "";
  for(let j = 1;j<=i;j++){
  row+=j;
  }
console.log(row)

  }
  
}
let number = 5;
printRow(number);


/*   4. Print following pattern(write a
    function)

  *
    *
      *
        */
    function printStar(number) {
      for (let i = 0; i < number; i++) {
        let star = "";
        for (let j = 0; j < i; j++) {
          star += "   ";
        }
        star += "*";
        console.log(star)
      }
    }
    printStar(5)

    /* 6. Print following pattern (write a function)
 * * * * *
 * * * * *
 * * * * *
 */
function printStar(number) {
  for (let i = 0; i < number; i++) {
    let star = "";
    for (let j = 0; j < number+2; j++) {
      star += " ";
      star+="*";
    }

    console.log(star);
  }
}
printStar(3);

/*5. Print following pattern (write a function)

    *                   *
         *      *
            *
         *        *
    *                  * */
function printPattern(number) {
  for (let i = 0; i < number; i++) {
    let star = "";
    for (let j = 0; j < number; j++) {
      if (i === j||i+j===number-1) {
        star += "*";
      } else {
        star += "  ";
      }
    }
    console.log(star);
  }
}

printPattern(7);


/*2. Given a string and symbols. Change first symbol by the second one in the string.

Input Output

“The results are not recorded yet”, “t”, “w” “The resulws are now recorded yew”
“does the following code”, “o”, “0” “d0es the f0ll0wing c0de”*/
function changeFirstsimbol(str1, simbol1, simbol2) {
  let i = 0;
  while (i < str1.length) {
    let match = true
    let result = "";
    for (let j = 0; j < str2.length; j++) {
      if (str1[i + j] !== str2[j]) {
        match = false;
        break;
      }
      if (str1[i + j] === simbol1[j]) {
        result += simbol2;
        i += simbol1.length;
      } else {
        result += str1[i];
        i++

      }
    }
    
  }return result;
  
}


let string1 = "The results are not recorded yet";
let simbol1 = "t";
let simbol2 = "w";
changeFirstsimbol(string1,simbol1,simbol2);