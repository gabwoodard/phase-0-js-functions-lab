function calculateTax(amount) {
  return amount * 0.10;
}
function convertToUpperCase(text) {
  return text.toUpperCase();
}
function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discount = originalPrice * (discountPercentage / 100);
  return originalPrice - discount;
}
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};
console.log(calculateTax(200));
console.log(convertToUpperCase("hello"));
console.log(findMaximum(5, 12));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("garden"));
console.log(calculateDiscountedPrice(100, 20));