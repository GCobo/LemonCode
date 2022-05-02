const booking1 = { count: 3, price: 127.95 }
const booking2 = { count: 5, price: 112.95 }

// Comparar si dos reservas son iguales.
console.log('Comparando el valor', booking1 == booking2)
console.log('Comparando el valor y el tipo', booking1 === booking2)

// Mostrar la suma del número de noches de las dos reservas.
let totalBooking1Price = booking1.count * booking1.price
let totalBooking2Price = booking2.count * booking2.price
console.log(`El total es ${totalBooking1Price + totalBooking2Price}€`)

// Comparar dos reservas para mostrar la de mayor número de noches.
const getHighestCount = Math.max(booking1.count, booking2.count)

if (getHighestCount === booking1.count) {
  console.log('La reserva con más noches es la 1º')
} else {
  console.log('La reserva con más noches es la 2º')
}

// Ampliar una noche más una reserva.
const enlargeBooking = booking1.count + 1
console.log('Ampliar una noche más una reserva', enlargeBooking)

// Calcular la diferencia de precio total entre dos reservas (incluidos descuentos).
const discount = 0.8
const discountAmount = 500

if (totalBooking1Price > discountAmount) {
  totalBooking1Price = totalBooking1Price * discount
}
if (totalBooking2Price > discountAmount) {
  totalBooking2Price = totalBooking2Price * discount
}

console.log(
  `La diferencia de precio es de ${totalBooking2Price - totalBooking1Price}€`,
)

// Comparar dos reservas para mostrar la de mayor precio total (incluidos descuentos).
const getHighestCountWithDiscount = Math.max(
  totalBooking1Price,
  totalBooking2Price,
)

if (getHighestCountWithDiscount === totalBooking1Price) {
  console.log('La reserva con el precio más alto es la 1º')
}

if (getHighestCountWithDiscount === totalBooking2Price) {
  console.log('La reserva con el precio más alto es la 2º')
}

// Mostrar número de reservas a las que se podrían aplicar descuento.

if (totalBooking1Price > discountAmount) {
  console.log('La reserva nº1 se puede aplicar descuento')
} else if (totalBooking2Price > discountAmount) {
  console.log('La reserva nº2 se puede aplicar descuento')
} else {
  console.log('Ninguna reserva puede aplicar descuento')
}
// Mostrar "Todas con descuento" si las dos reservas tienen descuentos.
if (
  totalBooking1Price > discountAmount &&
  totalBooking2Price > discountAmount
) {
  console.log('Todas con descuento')
} else {
  console.log('Ninguna con descuento')
}

// Mostrar la suma del precio total con descuentos de las dos reservas.
console.log(
  `El precio total de las reservas es ${
    totalBooking1Price + totalBooking2Price
  }€`,
)
