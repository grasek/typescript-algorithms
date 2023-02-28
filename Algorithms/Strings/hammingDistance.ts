function hammingDistanceTS(str1: string, str2: string): number {
  if (str1.length !== str2.length) {
    return -1;
  }

  let distance: number = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      distance++;
    }
  }

  return distance;
}
