/*Implement following methods
string - includes, indexOf, replace, replaceAll
array - includes, indexOf, slice*/

/* string/ includes*/
let string1 = "something";

function checkString(str, inc) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == inc) {
return true
    }
  }return false
}
console.log(checkString(string1,"o"));

/* string/indexOf*/
let string = "something";

function checkIndex(str, searchEl) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == searchEl) {
return i
    }
  }return -1
}
console.log(checkIndex(string,"e"))

/*string /replaceAll*/
let str = "my dog is lazy"
let strtoadd = "cat"
let strtobereplased = "dog"

function checkReplace(origStr, strtoChange, replaceWith) {
  let result = "";
  for (let i = 0; i < origStr.length; i++) {
    let foundMatch = false
    if (origStr.slice(i, i + strtoChange.length) === strtoChange) {
      result += replaceWith
      i += strtoChange.length-1;
      foundMatch = true
    }
    if(!foundMatch){
    result+=origStr[i]
    }
  }
  return result
}
console.log(checkReplace(str, strtobereplased, strtoadd))
 /*string /replace */


 let str1 = "my dog is  lazy,but my dog is kind,"
 let strToadd = "cat"
 let strTobereplased = "dog"
 
 function checkReplace(origStr, strtoChange, replaceWith) {
   let result = "";
   let foundMatch = false
   for (let i = 0; i < origStr.length; i++) {
     if (origStr.slice(i, i + strtoChange.length) === strtoChange && (!foundMatch)) {
       result += replaceWith
       i += strtoChange.length - 1;
       foundMatch = true;
     } else {
       result += origStr[i]
     }
 
   }
   return result
 }
 console.log(checkReplace(str1, strTobereplased, strToadd))

/*array/ includes*/

let arr1 = [1, 3, 8];
let arr2 = [3]

function checkIfIncludes(arr,isElementPresent) {
  for (let i = 0; i < arr.length; i++) {
   if(arr[i]==isElementPresent){
   return true
   }

  }
  return false
}
console.log(checkIfIncludes(arr1,arr2))


/*array/indexOf*/
let numbersArray = [1, 3, 8];
let numbersToFind = 8

function checkIndexOf(arr,givenNum,) {
  for (let i = 0; i < arr.length; i++) {
   if(arr[i]==givenNum){
   return i
   }

  }
  return -1;
}
console.log(checkIndexOf(numbersArray,numbersToFind))


/*array/slice*/
let mainArray = [1, 3, 8];
let startIndex = 0;
let endIndex = 2;
function slice(arr, start, end) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i >= start && i < end) {
      newarr.push(arr[i])
    }
  }

return newarr;
}
console.log(slice(mainArray,startIndex,endIndex))
