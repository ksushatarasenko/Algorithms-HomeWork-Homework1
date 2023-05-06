
const arr = [-2, 4, 3, 9, -7, 0, 10, -4, 9];

let minNums = [];
  let min1 = Infinity, min2 = Infinity, min3 = Infinity, min4 = Infinity, min5 = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min1) {
      min5 = min4;
      min4 = min3;
      min3 = min2;
      min2 = min1;
      min1 = arr[i];
    } else if (arr[i] < min2) {
      min5 = min4;
      min4 = min3;
      min3 = min2;
      min2 = arr[i];
    } else if (arr[i] < min3) {
      min5 = min4;
      min4 = min3;
      min3 = arr[i];
    } else if (arr[i] < min4) {
      min5 = min4;
      min4 = arr[i];
    } else if (arr[i] < min5) {
      min5 = arr[i];
    }
  }
  minNums.push(min3, min5);
  
console.log(minNums);





