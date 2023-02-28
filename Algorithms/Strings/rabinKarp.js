function rabinKarp(text, pattern) {
  const base = 26;
  const modulus = 101;
  const textLength = text.length;
  const patternLength = pattern.length;
  const patternHash = hash(pattern);
  let textHash = hash(text.substring(0, patternLength));

  if (
    textHash === patternHash &&
    text.substring(0, patternLength) === pattern
  ) {
    return 0;
  }

  for (let i = 1; i <= textLength - patternLength; i++) {
    const previousChar = text.charCodeAt(i - 1) - 97;
    const nextChar = text.charCodeAt(i + patternLength - 1) - 97;
    textHash =
      ((textHash - previousChar * Math.pow(base, patternLength - 1)) * base +
        nextChar) %
      modulus;
    if (textHash < 0) {
      textHash += modulus;
    }
    if (
      textHash === patternHash &&
      text.substring(i, i + patternLength) === pattern
    ) {
      return i;
    }
  }

  return -1;
}

function hash(str) {
  let hash = 0;
  const base = 26;
  const modulus = 101;

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i) - 97;
    hash = (hash * base + charCode) % modulus;
  }

  return hash;
}
