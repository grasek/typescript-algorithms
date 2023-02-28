function longestCommonSubstringTS(s1: string, s2: string): string {
  let maxLength = 0;
  let end = 0;

  const table: number[][] = new Array(s1.length + 1)
    .fill(0)
    .map(() => new Array(s2.length + 1).fill(0));

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + 1;
        if (table[i][j] > maxLength) {
          maxLength = table[i][j];
          end = i - 1;
        }
      } else {
        table[i][j] = 0;
      }
    }
  }

  return s1.slice(end - maxLength + 1, end + 1);
}
