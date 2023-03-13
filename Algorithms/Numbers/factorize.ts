// It's worth noting that this way of factorize is quite efficient, but not always give exactly result,
// for example it may returns "21" as a factors instead of "3, 7"
// If you need more accurate alternative take a look at "factorize2"
const factorize = (n: number): number[] => {
  if (n < 2) return [];
  const f = (x: number): number => (x * x + 1) % n;
  let x = 2,
    y = 2,
    d = 1;
  while (d === 1) {
    x = f(x);
    y = f(f(y));
    d = gcd(Math.abs(x - y), n);
  }
  return d === n ? [n] : [...factorize(d), ...factorize(n / d)];
};

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
