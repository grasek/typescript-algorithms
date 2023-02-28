function rabinKarpTS(text: string, pattern: string): number {
  const base: number = 26;
  const modulus: number = 101;
  const textLength: number = text.length;
  const patternLength: number = pattern.length;
  const patternHash: number = hash(pattern);
  let textHash: number = hash(text.substring(0, patternLength));

  if (
    textHash === patternHash &&
    text.substring(0, patternLength) === pattern
  ) {
    return 0;
  }

  for (let i = 1; i <= textLength - patternLength; i++) {
    const previousChar: number = text.charCodeAt(i - 1) - 97;
    const nextChar: number = text.charCodeAt(i + patternLength - 1) - 97;
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

function hashTS(str: string): number {
  let hash: number = 0;
  const base: number = 26;
  const modulus: number = 101;

  for (let i = 0; i < str.length; i++) {
    const charCode: number = str.charCodeAt(i) - 97;
    hash = (hash * base + charCode) % modulus;
  }

  return hash;
}
