function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let halfwayThrough = Math.floor(arr.length / 2);
  let arrayFirstHalf = mergeSort(arr.slice(0, halfwayThrough));
  let arraySecondHalf = mergeSort(arr.slice(halfwayThrough, arr.length));

  function merge(left, right) {
    let mergedArr = [];
    while (left.length !== 0 && right.length !== 0) {
      if (left[0] < right[0]) {
        mergedArr.push(left[0]);
        left.shift();
      } else {
        mergedArr.push(right[0]);
        right.shift();
      }
    }
    mergedArr.push(...right);
    mergedArr.push(...left);

    return mergedArr;
  }

  return merge(arrayFirstHalf, arraySecondHalf);
}
