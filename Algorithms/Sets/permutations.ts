function permutationsTS<T>(arr: T[]): T[][] {
  const result: T[][] = [];

  function backtrack(arr: T[], permutation: T[] = []): void {
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
