
function bubbleSort(arr) {
    const len = arr.length;
    let swapped = true;
  
    while (swapped) {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) { 
          if (arr[j] > arr[j + 1]) {
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }
      }
    }
  
    return arr;
  }
  
  const numbers = [5, 8, 9, 7, 3];
  bubbleSort(numbers);