
/*Implement following methods

array - find, map, findIndex, reduce */

 /*find*/u
function callBack(element ) {
    return element>1
    
    }
    
    function find(arr,fn) {
      for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
          return arr[i]
        }
      
      }
    return undefined
    }
    console.log(find([1,5,8],callBack))
/* map*/
function callback(arr) {
    let result = []
      for (let i = 0; i < arr.length; i++) {
       
       result.push(arr[i]*2) 
      }
      return result
    }
    console.log(callback([1,5,9]))
    /*findIndex*/
    function callBack(element ) {
        return element>9
        }
        function findIndexof(arr,fn) {
          for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i])) {
              return i
            }
          
          }
        return -1
        }
        console.log(findIndexof([1,5,8],callBack))
        /*reduce*/