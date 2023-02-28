function radixSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const maxNum = Math.max(...arr);
  let divisor = 1;

  while (divisor <= maxNum) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      const digit = Math.floor((arr[i] / divisor) % 10);
      buckets[digit].push(arr[i]);
    }

    arr = [].concat(...buckets);
    divisor *= 10;
  }

  return arr;
}
