function isPalindromeTS(str: string): boolean {
  const n: number = str.length;

  for (let i: number = 0; i < n / 2; i++) {
    if (str[i] !== str[n - i - 1]) {
      return false;
    }
  }

  return true;
}
