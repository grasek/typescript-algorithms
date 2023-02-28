// Get the value of the bit at a given position
function getBit(num, pos) {
  return ((num >> pos) & 1) === 1;
}

// Set the value of the bit at a given position to 1
function setBit(num, pos) {
  return num | (1 << pos);
}

// Set the value of the bit at a given position to 0
function clearBit(num, pos) {
  return num & ~(1 << pos);
}

// Toggle the value of the bit at a given position (1 becomes 0, and 0 becomes 1)
function toggleBit(num, pos) {
  return num ^ (1 << pos);
}

// Check if the integer is a power of two
function isPowerOfTwo(num) {
  return (num & (num - 1)) === 0;
}
