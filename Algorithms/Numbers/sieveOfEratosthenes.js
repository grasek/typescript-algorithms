function sieveOfEratosthenes(n) {
  const primes = Array(n + 1).fill(true);

  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }

  const result = [];

  for (let i = 2; i <= n; i++) {
    if (primes[i]) {
      result.push(i);
    }
  }

  return result;
}
