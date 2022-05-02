const getShoppingCart = document.querySelector('#shopping_cart')
const getTotalPrice = document.querySelector('#total_price')
const getShoppingFiltered = document.querySelector('#shopping_filtered')

const carrito = [
  {
    id: 198752,
    name: 'Tinta DJ27 Color',
    price: 52.95,
    count: 3,
    premium: true,
  },
  {
    id: 75621,
    name: 'Impresora ticketera PRO-201',
    price: 32.75,
    count: 2,
    premium: true,
  },
  {
    id: 54657,
    name: 'Caja de rollos de papel para ticketera',
    price: 5.95,
    count: 3,
    premium: false,
  },
  {
    id: 3143,
    name: 'Caja de folios DIN-A4 80gr',
    price: 9.95,
    count: 2,
    premium: false,
  },
]

const newCarrito = [...carrito]

// Listar elementos del carrito en el DOM

for (i = 0; i < carrito.length; i++) {
  const createElement = document.createElement('li')
  getShoppingCart.appendChild(createElement)
  createElement.innerHTML = `
    <p>Id: ${carrito[i].id}</p>
    <p>Name: ${carrito[i].name}</p>
    <p>Price: ${carrito[i].price}</p>
    <p>Count: ${carrito[i].count}</p>
    <p>Premium: ${carrito[i].premium}</p>
  `
}

// Eliminar elemento del dom

const getItemToRemove = () => {
  return newCarrito.indexOf(newCarrito.find((item) => item.id === 54657))
}
// Before
console.log(newCarrito)
newCarrito.splice(getItemToRemove(), 1)
// After
console.log(newCarrito)

// Calcular el precio total

const calculateTotalPrice = () => {
  return carrito.map((item) => item.count * item.price).reduce((a, b) => a + b)
}

getTotalPrice.innerText = `el precio total del carrito es ${calculateTotalPrice()}€`

// Filtrado por prime

const createElementsFiltered = () => {
  carrito
    .filter((item) => item.premium === true)
    .map((item) => {
      const createElement = document.createElement('li')
      getShoppingFiltered.appendChild(createElement)
      createElement.innerHTML = `
  <p>Id: ${item.id}</p>
  <p>Name: ${item.name}</p>
  <p>Price: ${item.price}</p>
  <p>Count: ${item.count}</p>
  <p>Premium: ${item.premium}</p>`
    })
}

createElementsFiltered()
