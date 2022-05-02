const roomPrices = {
  Standard: 100,
  Junior_Suite: 120,
  Suite: 150,
}

const sizeRoomPrices = {
  Individual: 0.75,
  Doble: 1,
  Triple: 1.25,
}

const getRoomCost = () => roomPrices[document.getElementById('room').value]
const getSpaCost = () => (document.getElementById('spa').checked ? 20 : 1)
const getSizeFactor = () =>
  sizeRoomPrices[document.getElementById('sizeRoom').value]
const getNumNights = () =>
  document.getElementById('nights').value
    ? document.getElementById('nights').value
    : 1
const getParkingCost = () => document.getElementById('parking').value * 10

// Una función para calcular el coste total, que a su vez llama a cada una
// de las funciones individuales que hemos creado antes.

const calculateTotalCost = () =>
  (getRoomCost() + getSpaCost()) * getSizeFactor() * getNumNights() +
  getParkingCost()

// Otra función que acepta como parámetro de entrada un coste y lo pinta por pantalla
const updateTotalCost = (cost) => {
  document.getElementById('price-result').innerText =
    'Total: ' + cost.toString() + '€'
}

// Nuestro event handler será una composición con 2 funciones.
const handleCalculateStay = () => updateTotalCost(calculateTotalCost())

// Registra nuestro event handler para cada input, de modo que se actualize el precio
// en vivo. El botón Calcular realmente ya no sería necesario.
document.getElementById('room').addEventListener('change', handleCalculateStay)
document.getElementById('spa').addEventListener('change', handleCalculateStay)
document
  .getElementById('sizeRoom')
  .addEventListener('change', handleCalculateStay)
document
  .getElementById('nights')
  .addEventListener('change', handleCalculateStay)
document
  .getElementById('parking')
  .addEventListener('change', handleCalculateStay)
