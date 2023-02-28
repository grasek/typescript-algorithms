function quickSelectTS(arr: number[], k: number): number {
  if (arr.length === 1) {
    return arr[0];
  }

  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIndex];

  const less = arr.filter((elem, index) => {
    return elem <= pivot && index !== pivotIndex;
  });
  const greater = arr.filter((elem) => {
    return elem > pivot;
  });

  if (k <= less.length) {
    return quickSelect(less, k);
  } else if (k === less.length + 1) {
    return pivot;
  } else {
    return quickSelect(greater, k - less.length - 1);
  }
}
