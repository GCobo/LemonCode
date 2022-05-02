const sum = (value1, value2) => value1 + value2
const subtract = (value1, value2) => value1 - value2
const multiply = (value1, value2) => value1 * value2
const division = (value1, value2) => value1 / value2

const getForm = document.querySelector('#form')

const getInputValue1 = document.querySelector('#value1')
const getInputValue2 = document.querySelector('#value2')

const getButtonSum = document.querySelector('#Sum')
const getButtonSubtract = document.querySelector('#Subtract')
const getButtonMultiply = document.querySelector('#Multiply')
const getButtonDivision = document.querySelector('#Division')

const getResult = document.querySelector('#results')

getInputValue1.addEventListener('change', (event) => {
  getInputValue1.value = event.target.value
})
getInputValue2.addEventListener('change', (event) => {
  getInputValue2.value = event.target.value
})

getForm.addEventListener('submit', (event) => {
  event.preventDefault()
  if (getInputValue1.value === '' || getInputValue2.value === '') {
    getResult.innerHTML = 'Un campo está vacio'
  }
})

getButtonSum.addEventListener('click', () => {
  getResult.innerHTML = sum(
    Number(getInputValue1.value),
    Number(getInputValue2.value),
  )
})

getButtonSubtract.addEventListener('click', () => {
  getResult.innerHTML = subtract(
    Number(getInputValue1.value),
    Number(getInputValue2.value),
  )
})

getButtonMultiply.addEventListener('click', () => {
  getResult.innerHTML = multiply(
    Number(getInputValue1.value),
    Number(getInputValue2.value),
  )
})

getButtonDivision.addEventListener('click', () => {
  getResult.innerHTML = division(
    Number(getInputValue1.value),
    Number(getInputValue2.value),
  )
})

// const validatedInput1 = document.forms['form']['value1'].value
// const validatedInput2 = document.forms['form']['value2'].value
// ---
// const getInputValue1 = document.querySelector('#value1')
// const getInputValue2 = document.querySelector('#value2')
