function heapSortTS(arr: number[]): number[] {
  buildMaxHeap(arr);

  for (let i: number = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapifyDown(arr, 0, i - 1);
  }

  return arr;
}

function buildMaxHeapTS(arr: number[]): void {
  const firstParentIdx: number = Math.floor((arr.length - 2) / 2);

  for (let i: number = firstParentIdx; i >= 0; i--) {
    heapifyDown(arr, i, arr.length - 1);
  }
}

function heapifyDownTS(arr: number[], idx: number, endIdx: number): void {
  let leftIdx: number = 2 * idx + 1;

  while (leftIdx <= endIdx) {
    const rightIdx: number = 2 * idx + 2 <= endIdx ? 2 * idx + 2 : -1;
    let swapIdx: number;

    if (rightIdx !== -1 && arr[rightIdx] > arr[leftIdx]) {
      swapIdx = rightIdx;
    } else {
      swapIdx = leftIdx;
    }

    if (arr[swapIdx] > arr[idx]) {
      swap(arr, idx, swapIdx);
      idx = swapIdx;
      leftIdx = 2 * idx + 1;
    } else {
      return;
    }
  }
}

function swapTS(arr: number[], i: number, j: number): void {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
