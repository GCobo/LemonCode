const booking = { count: 5, price: 127.95 }
const discount = 0.8
const discountAmount = 500

let getTotalPrice = booking.count * booking.price

if (getTotalPrice > discountAmount) {
  getTotalPrice = getTotalPrice * discount
}

console.log(`El precio total será de ${getTotalPrice}€`)
