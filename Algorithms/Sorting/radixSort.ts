function radixSortTS(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const maxNum: number = Math.max(...arr);
  let divisor: number = 1;

  while (divisor <= maxNum) {
    const buckets: number[][] = Array.from({ length: 10 }, () => []);

    for (let i: number = 0; i < arr.length; i++) {
      const digit: number = Math.floor((arr[i] / divisor) % 10);
      buckets[digit].push(arr[i]);
    }

    arr = ([] as number[]).concat(...buckets);
    divisor *= 10;
  }

  return arr;
}
