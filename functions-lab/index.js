function calculateTax(amount) {
  return amount * 0.10;
}

function convertToUpperCase(text) {
  return String(text).toUpperCase();
}

function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function isPalindrome(word) {
  const s = String(word).toLowerCase();
  return s === s.split("").reverse().join("");
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice - (originalPrice * (discountPercentage / 100));
}

module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};