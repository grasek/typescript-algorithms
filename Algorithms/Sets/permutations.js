function permutations(arr) {
  const result = [];

  function backtrack(arr, permutation = []) {
    if (permutation.length === arr.length) {
      result.push([...permutation]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (permutation.includes(arr[i])) {
        continue;
      }
      permutation.push(arr[i]);
      backtrack(arr, permutation);
      permutation.pop();
    }
  }

  backtrack(arr);

  return result;
}
