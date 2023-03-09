const factorize = (n) => {
  if (n < 2) return [];
  const quadraticFormula = (x) => (x * x + 1) % n;
  let [x, y, d] = [2, 2, 1];
  while (d === 1) (x = quadraticFormula(x)), (y = quadraticFormula(quadraticFormula(y))), (d = gcd(Math.abs(x - y), n));
  return d === n ? [n] : [...factorize(d), ...factorize(n / d)];
};
// greatest common divisior
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
