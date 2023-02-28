function binarySearchTS(arr: number[], target: number): number {
  const n: number = arr.length;
  let left: number = 0;
  let right: number = n - 1;

  while (left <= right) {
    const mid: number = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
