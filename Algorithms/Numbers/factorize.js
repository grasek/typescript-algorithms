// It's worth noting that this way of factorize is quite efficient, but not always give exactly result,
// for example it may returns "21" as a factors instead of "3, 7"
// If you need more accurate alternative take a look at "factorize2"
const factorize = (n) => {
  if (n < 2) return [];
  const quadraticFormula = (x) => (x * x + 1) % n;
  let [x, y, d] = [2, 2, 1];
  while (d === 1) (x = quadraticFormula(x)), (y = quadraticFormula(quadraticFormula(y))), (d = gcd(Math.abs(x - y), n));
  return d === n ? [n] : [...factorize(d), ...factorize(n / d)];
};
// greatest common divisior
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
