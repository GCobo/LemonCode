const getInputValue1 = document.querySelector('#value1')
const getButtonSum = document.querySelector('#Sum')
const getButtonSubtract = document.querySelector('#Subtract')
const getButtonMultiply = document.querySelector('#Multiply')
const getButtonDivision = document.querySelector('#Division')
const getButtonResult = document.querySelector('#result-operation')
const getForm = document.querySelector('#form')

const getResult = document.querySelector('#results')

function useState(initialValue) {
  let value = initialValue
  function state() {
    return value
  }
  function setState(newValue) {
    value = newValue
  }
  return [state, setState]
}

const [operation, setOperation] = useState(0)

const resetValue = () => {
  getInputValue1.value = ''
}

getInputValue1.addEventListener('change', (event) => {
  getInputValue1.value = event.target.value
})

getButtonSum.addEventListener('click', () => {
  setOperation(operation() + +getInputValue1.value)
  resetValue()
})

getButtonSubtract.addEventListener('click', () => {
  setOperation(operation() - +getInputValue1.value)
  resetValue()
})

getButtonMultiply.addEventListener('click', () => {
  setOperation(operation() * +getInputValue1.value)
  resetValue()
})

getButtonDivision.addEventListener('click', () => {
  setOperation(operation() / +getInputValue1.value)
  resetValue()
})

getButtonResult.addEventListener('click', () => {
  getResult.innerHTML = `${operation()}`
})
