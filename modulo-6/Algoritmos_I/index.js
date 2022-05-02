// Constantes.
const taxes = {
  REGULAR_TYPE: 21,
  LOWER_TYPE: 4,
  EXEMPT_TYPE: 0,
}

// Entrada.
const products = [
  {
    description: 'Goma de borrar',
    price: 0.25,
    tax: taxes.LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: 'Lápiz H2',
    price: 0.4,
    tax: taxes.LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: 'Cinta rotular',
    price: 9.3,
    tax: taxes.REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: 'Papelera plástico',
    price: 2.75,
    tax: taxes.REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: 'Escuadra',
    price: 8.4,
    tax: taxes.REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: 'Pizarra blanca',
    price: 5.95,
    tax: taxes.REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: 'Afilador',
    price: 1.2,
    tax: taxes.LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: 'Libro ABC',
    price: 19,
    tax: taxes.EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
]

const getList = document.querySelector('#list')
const createLabel = document.createElement('label')
const createInput = document.createElement('input')
createInput.type = 'number'
const getButton = document.querySelector('#calculate')
const getTotal = document.querySelector('#total')
const getSubTotal = document.querySelector('#subtotal')
const getIVA = document.querySelector('#iva')
const getForm = document.querySelector('form')

const createList = () => {
  products.map((item, index) => {
    const createElement = document.createElement('li')
    getList.appendChild(createElement)
    const idElementForm = `element-${index + 1}`
    createInput.id = idElementForm
    createInput.name = idElementForm
    createLabel.htmlFor = idElementForm
    createElement.append(createLabel, createInput)
    document.querySelector(`#element-${index + 1}`).max = item.stock
    document.querySelector(`#element-${index + 1}`).min = 0
    createLabel.innerText = `${item.description}`
    createElement.innerHTML = `${
      createLabel.outerHTML + createInput.outerHTML
    }  ${item.price}€/ud`

    getButton.disabled = true

    document
      .querySelector(`#${idElementForm}`)
      .addEventListener('change', (event) => {
        item.units = +event.target.value
        checkUnits()
      })
  })
}

createList()

getForm.addEventListener('submit', (event) => {
  event.preventDefault()
})

const checkUnits = () =>
  (getButton.disabled = !products.some((item) => item.units >= 1))

const getSubTotalPrice = () =>
  products.reduce((acc, item) => (acc += item.units * item.price), 0)

const getTotalIVA = () =>
  products.reduce(
    (acc, item) => (acc += item.units * item.price * (item.tax / 100)),
    0,
  )

getButton.addEventListener('click', () => {
  getIVA.innerText = `IVA: ${getTotalIVA()} €`
  getSubTotal.innerText = `Subtotal: ${getSubTotalPrice()} €`
  getTotal.innerText = `TOTAL: ${getSubTotalPrice() + getTotalIVA()} €`
})
