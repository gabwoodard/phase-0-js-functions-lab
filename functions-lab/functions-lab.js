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
  const rev = s.split("").reverse().join("");
  return s === rev;
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

if (require.main === module) {
  console.log("tax(50) ->", calculateTax(50));
  console.log("upper('hello') ->", convertToUpperCase("hello"));
  console.log("max(3, 7) ->", findMaximum(3, 7));
  console.log("pal('Level') ->", isPalindrome("Level"));
  console.log("discount(100, 20) ->", calculateDiscountedPrice(100, 20));
}
