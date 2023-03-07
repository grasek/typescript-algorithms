const factorize = (n) => {
  if (n < 2) return [];
  const f = (x) => (x * x + 1) % n;
  let x = 2,
    y = 2,
    d = 1;
  while (d === 1) (x = f(x)), (y = f(f(y))), (d = gcd(Math.abs(x - y), n));
  return d === n ? [n] : [...factorize(d), ...factorize(n / d)];
};

const gcd = (a, b) => (b ? gcd(b, a % b) : a);
