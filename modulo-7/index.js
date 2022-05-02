// IBAN

const IBAN = 'ES6600190020961234567890'
const IBAN_space = 'ES66 0019 1020 9612 3456 7890'

const regex = /^[A-Z]{2}[0-9]{22}$/
const regexSpace = /^[A-Z]{2}([0-9]\s?){22}$|^[A-Z]{2}[0-9]{22}$/
const regexExtract = /^([A-Z]{2})([0-9]{22})$/

// CASE 1
console.info('CASE 1')
console.log(regex.test(IBAN))

// CASE 2
console.info('CASE 2')
console.log(regexSpace.test(IBAN))
console.log(regexSpace.test(IBAN_space))

// CASE 3
console.info('CASE 3')
console.log(regexExtract.exec(IBAN).splice(1, 1))
console.log(regexExtract.exec(IBAN).splice(2, 1))

// Validar matrícula coche

const arr = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA']

const regexCar = /^([0-9]{4})[\s-]{0,1}([A-Z]{3})$/

const checkArr = arr.every((item) => regexCar.test(item))
const extractArr = arr.map((item) =>
  regexCar.exec(item).map((itemExtract) => itemExtract),
)

console.info('CASE 1 CAR')
console.log(checkArr)

console.info('CASE 2 CAR')
console.log(extractArr)

// Opcionales

const getSingleImage = document.querySelector('img').src

const getAllImage = () => {
  const arr = []
  const getAllImage = document.querySelectorAll('img')

  for (let i = 0; i < getAllImage.length; i++) {
    arr.push(getAllImage[i].src)
  }

  return arr
}

console.info('CASE 1 OPCIONAL')
console.log(getSingleImage)

console.info('CASE 2 OPCIONAL')
console.log(getAllImage())

// CREDITS CARD

const regexCard = /^[50-55]{2}[0-9]{2}[\s-\d]{14}/

const arrCard = ['5299 64000 000 000', '5299-64000-000-000', '529964000000000']

const checkArrCard = arrCard.every((item) => regexCard.test(item))

console.info('CASE 1 CREDITS CARD')
console.log(checkArrCard)
