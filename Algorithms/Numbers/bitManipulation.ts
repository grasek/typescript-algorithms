// Get the value of the bit at a given position
function getBitTS(num: number, pos: number): boolean {
  return ((num >> pos) & 1) === 1;
}

// Set the value of the bit at a given position to 1
function setBitTS(num: number, pos: number): number {
  return num | (1 << pos);
}

// Set the value of the bit at a given position to 0
function clearBitTS(num: number, pos: number): number {
  return num & ~(1 << pos);
}

// Toggle the value of the bit at a given position (1 becomes 0, and 0 becomes 1)
function toggleBitTS(num: number, pos: number): number {
  return num ^ (1 << pos);
}

// Check if the integer is a power of two
function isPowerOfTwoTS(num: number): boolean {
  return (num & (num - 1)) === 0;
}
