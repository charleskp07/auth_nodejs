const crypto = require('crypto');

function generateOtp(length = 6) {
  // Génère un entier aléatoire à 6 chiffres; puis string padded
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  const num = crypto.randomInt(min, max + 1);
  return String(num);
}

module.exports = { generateOtp };