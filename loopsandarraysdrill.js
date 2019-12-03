'use strict';

let numbers = [-5, 28, 98, -20013, 0.7878, 22, 115];

function max(numbers) {
    let maxCurrent = numbers[0];
    let i = 0;
    while (i < numbers.length) {
      if (numbers[i] > maxCurrent) {
           maxCurrent = numbers[i];
      }
      i++;
    }
    return maxCurrent;
  }
  
  function min(numbers) {
    let minCurrent = numbers[0];
    let i = 1;
    while (i < numbers.length) {
      if (numbers[i] < minCurrent) {
          minCurrent = numbers[i];
      }
      i++;
    }
    return minCurrent;
  }

  console.log(max(numbers));
  console.log(min(numbers));
  
  