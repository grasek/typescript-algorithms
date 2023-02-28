function quickSortTS(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}