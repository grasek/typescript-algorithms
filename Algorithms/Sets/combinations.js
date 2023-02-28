function combinations(arr, k) {
  const result = [];

  function backtrack(combination, start) {
    if (combination.length === k) {
      result.push([...combination]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      combination.push(arr[i]);
      backtrack(combination, i + 1);
      combination.pop();
    }
  }

  backtrack([], 0);

  return result;
}
