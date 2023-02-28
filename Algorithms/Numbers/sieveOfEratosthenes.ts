function sieveOfEratosthenesTS(n: number): number[] {
  const primes: boolean[] = Array(n + 1).fill(true);

  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }

  const result: number[] = [];

  for (let i = 2; i <= n; i++) {
    if (primes[i]) {
      result.push(i);
    }
  }

  return result;
}
