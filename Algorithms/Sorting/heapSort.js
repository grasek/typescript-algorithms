function heapSort(arr) {
  buildMaxHeap(arr);

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapifyDown(arr, 0, i - 1);
  }

  return arr;
}

function buildMaxHeap(arr) {
  const firstParentIdx = Math.floor((arr.length - 2) / 2);

  for (let i = firstParentIdx; i >= 0; i--) {
    heapifyDown(arr, i, arr.length - 1);
  }
}

function heapifyDown(arr, idx, endIdx) {
  let leftIdx = 2 * idx + 1;

  while (leftIdx <= endIdx) {
    const rightIdx = 2 * idx + 2 <= endIdx ? 2 * idx + 2 : -1;
    let swapIdx;

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

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
