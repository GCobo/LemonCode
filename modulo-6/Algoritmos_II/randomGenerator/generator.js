const randomPick = (n, minNumber, maxNumber) => {
  let values = []

  for (let i = 0; i < n; i++) {
    values.push(
      Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber),
    )
  }
  return values
}

console.log(randomPick(6, 1, 49)) // Apuesta automática de la primitiva
console.log(randomPick(15, 1, 15)) // Escoge combinación de bolas de billar
console.log(randomPick(1, 1, 6)) // Tirada aleatoria de un dado
