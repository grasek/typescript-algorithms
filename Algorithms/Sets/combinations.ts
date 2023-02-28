function combinationsTS<T>(arr: T[], k: number): T[][] {
  const result: T[][] = [];

  function backtrack(combination: T[], start: number): void {
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
