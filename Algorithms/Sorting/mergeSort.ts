function mergeSortTS(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const middle: number = Math.floor(arr.length / 2);
  const left: number[] = arr.slice(0, middle);
  const right: number[] = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function mergeTS(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i: number = 0;
  let j: number = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
