function combinationSumTS(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  function backtrack(combination: number[], start: number, sum: number): void {
    if (sum === target) {
      result.push([...combination]);
      return;
    }

    if (sum > target) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      combination.push(candidates[i]);
      backtrack(combination, i, sum + candidates[i]);
      combination.pop();
    }
  }

  backtrack([], 0, 0);

  return result;
}
