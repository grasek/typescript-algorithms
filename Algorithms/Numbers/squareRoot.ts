function squareRootTS(num: number): number {
  if (num < 0) {
    return NaN;
  }

  let guess = num / 2;
  let prevGuess = 0;

  while (guess !== prevGuess) {
    prevGuess = guess;
    guess = (guess + num / guess) / 2;
  }

  return guess;
}
