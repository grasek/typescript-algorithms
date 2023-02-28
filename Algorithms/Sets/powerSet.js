function powerSet(nums) {
  const result = [[]];

  function backtrack(start, subset) {
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
