const ROMAN_NUMERALS = {
  one: "I",// call this "I" with: ROMAN_NUMERALS.one
  five: "V",
  ten: "X",// call this "X" with: ROMAN_NUMERALS.ten
}



const numbers = [13, 12, 65, 23]

const doubledNumbers = numbers.map(function (number) {
  return number * 2
})

const tripledNumbers = numbers.map(number => {
  return number * 3
})

const quadrupledNumbers = numbers.map(number => number * 4)

const quintupleMe = number => number * 5
const quintupledNumbers = numbers.map(number => quintupleMe(number))