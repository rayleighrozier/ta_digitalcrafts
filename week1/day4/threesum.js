const threeSum = (arr, target) => {
  arr = arr.sort((a, b) => a - b);
  let answer = [];
  //  pointers are l, i (middle) and r
  for (i = 0; i < arr.length - 2; i++) {
    let l = 0;
    let r = arr.length - 1;
    let currentSum = arr[l] + arr[i] + arr[r];
    while (l < r) {
      if (currentSum == target) {
        answer = [...answer, [arr[l], arr[i], arr[r]]];
      } else if (currentSum < target) {
        l++;
      } else {
        r--;
      }
    }

    console.log(answer);
  }
};

threeSum([1, 2, 3, 6, 8], 11);
