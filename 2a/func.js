export function convertToNumber(str = '0') {
  return +str.replace(',', '.') || 0;
}

export function calculateSum(a, b) {
  return a + b;
}
