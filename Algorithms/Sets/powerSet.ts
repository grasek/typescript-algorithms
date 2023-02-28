function powerSetTS(nums: number[]): number[][] {
  const result: number[][] = [[]];

  function backtrack(start: number, subset: number[]) {
    for (let i = start; i < nums.length; i++) {
      subset.push(nums[i]);
      result.push([...subset]);
      backtrack(i + 1, subset);
      subset.pop();
    }
  }

  backtrack(0, []);

  return result;
}
