// Square

const square = (n, char) => {
  return Array(n).fill(char.repeat(n)).join('\n')
}

n = 1
console.log(square(1, '*'))
n = 2
console.log(square(2, '*'))
n = 3
console.log(square(3, '*'))
n = 4
console.log(square(4, '*'))
n = 5
console.log(square(5, '*'))

// Square with Border

const squareWithBorder = (n, charBorder, charInner) => {
  return Array(n)
    .fill()
    .map((e, index) =>
      index == 0 || index == n - 1
        ? charBorder.repeat(n)
        : charBorder + charInner.repeat(n - 2) + charBorder,
    ).join`\n`
}

n = 1
console.log(squareWithBorder(1, 'B', '*'))
n = 2
console.log(squareWithBorder(2, 'B', '*'))
n = 3
console.log(squareWithBorder(3, 'B', '*'))
n = 4
console.log(squareWithBorder(4, 'B', '*'))
n = 5
console.log(squareWithBorder(5, 'B', '*'))

// Cuadrado Diagonal Left-Right

const squareDiagonalLR = (n, charDiagonal, charUp, charDown) => {
  return Array(n)
    .fill()
    .map(
      (e, index) =>
        charDown.repeat(index) + charDiagonal + charUp.repeat(n - 1 - index),
    )
    .join(`\n`)
}

// n = 1
console.log(squareDiagonalLR(1, '|', 'A', 'B'))
// n = 2
console.log(squareDiagonalLR(2, '|', 'A', 'B'))
// n = 3
console.log(squareDiagonalLR(3, '|', 'A', 'B'))
// n = 4
console.log(squareDiagonalLR(4, '|', 'A', 'B'))
// n = 5
console.log(squareDiagonalLR(5, '|', 'A', 'B'))

// Cuadrado Diagonal Right-Left

const squareDiagonalRL = (n, charDiagonal, charUp, charDown) => {
  return Array(n)
    .fill()
    .map(
      (e, index) =>
        charUp.repeat(n - 1 - index) + charDiagonal + charDown.repeat(index),
    )
    .join(`\n`)
}

// n = 1
console.log(squareDiagonalRL(1, '|', 'A', 'B'))
// n = 2
console.log(squareDiagonalRL(2, '|', 'A', 'B'))
// n = 3
console.log(squareDiagonalRL(3, '|', 'A', 'B'))
// n = 4
console.log(squareDiagonalRL(4, '|', 'A', 'B'))
// n = 5
console.log(squareDiagonalRL(5, '|', 'A', 'B'))

// Medio Diamante

const halfDiamond = (n, char) => {
  const firsArr = Array(n)
    .fill()
    .map((e, index) => char.repeat(index + 1))

  const secondArr = Array(n)
    .fill()
    .map((e, index) => char.repeat(index))
    .reverse()

  return [...firsArr, ...secondArr].join(`\n`)
}

// // n = 1
console.log(halfDiamond(1, '*'))
// n = 2
console.log(halfDiamond(2, '*'))
// n = 3
console.log(halfDiamond(3, '*'))
// n = 4
console.log(halfDiamond(4, '*'))
// n = 5
console.log(halfDiamond(5, '*'))

// Pirámide

const pyramid = (n, char) =>
  Array(n)
    .fill()
    .map((e, index) => ' '.repeat(n - index - 1) + char.repeat(2 * index + 1))
    .join(`\n`)

// // n = 1
console.log(pyramid(1, '*'))
// n = 2
console.log(pyramid(2, '*'))
// n = 3
console.log(pyramid(3, '*'))
// // n = 4
console.log(pyramid(4, '*'))
// // n = 5
console.log(pyramid(5, '*'))

// Diamante

const diamond = (n, char) => {
  const firstArr = Array(n)
    .fill()
    .map((e, index) => ' '.repeat(n - index - 1) + char.repeat(2 * index + 1))

  const secondArr = Array(n)
    .fill()
    .map((e, index) => ' '.repeat(n - index - 1) + char.repeat(2 * index + 1))
    .reverse()
    .splice(1, n)

  return [...firstArr, ...secondArr].join(`\n`)
}

// // n = 1
console.log(diamond(1, '*'))
// n = 2
console.log(diamond(2, '*'))
// n = 3
console.log(diamond(3, '*'))
// // n = 4
console.log(diamond(4, '*'))
// // n = 5
console.log(diamond(5, '*'))
