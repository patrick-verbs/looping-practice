const ROMAN_NUMERALS = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,// call this 10 with: ROMAN_NUMERALS.X
  V: 5,
  I: 1,// call this 1 with: ROMAN_NUMERALS.I
}

function toRoman(number) {
  let numberInRomanNumerals = ""
  for (const [key, value] of Object.entries(ROMAN_NUMERALS)) {
    while (number >= value) {
      numberInRomanNumerals = numberInRomanNumerals + key
      number -= value
    }
    if (number === (value * .9) && value % 10 === 0) {
      numberInRomanNumerals = numberInRomanNumerals + "IX"
      number = 0
    }
  }
  while (number >= baseRomanNumerals[2]) {
    numberInRomanNumerals = numberInRomanNumerals + "X" // adds "X" to the end of the string
    number -= 10
  }
  if (number === 9) {
    numberInRomanNumerals = numberInRomanNumerals + "IX"
    number = 0
  }
  while (number >= 5) {
    numberInRomanNumerals = numberInRomanNumerals + "V"
    number -= 5
  }
  if (number === 4) {
    numberInRomanNumerals = numberInRomanNumerals + "IV"
    number = 0
  }
  while (number >= 1) {
    numberInRomanNumerals = numberInRomanNumerals + "I"
    number -= 1
  }

  return numberInRomanNumerals
}