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


function toRoman(number) {
  const romanNumeralOne = "I"
  const romanNumerals = romanNumeralOne.repeat(number)
  return romanNumerals
}