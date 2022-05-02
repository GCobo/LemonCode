const schedule = [
  {
    day: 'Lunes',
    subject: 'Matemáticas',
  },
  {
    day: 'Martes',
    subject: 'Lengua',
  },
  {
    day: 'Miércoles',
    subject: 'Física',
  },
  {
    day: 'Jueves',
    subject: 'Química',
  },
  {
    day: 'Viernes',
    subject: 'Gimnasia',
  },
]

// 1º Dado el siguiente objeto. Escribir en una variable un día de la semana y decir cual asignatura toca ese día.

function getSubject(day) {
  const scheduleDay = schedule.find((item) => item.day === day)
  return scheduleDay.subject
}

console.log(getSubject('Viernes'))

// 2º Según una variable llamada hora , mostrar un buenos días, buenas tardes o buenas noches según la hora.
// Se utilizarán los tramos de 6 a 12, de 13 a 20 y de 21 a 5. Solo se tienen en cuenta la hora no los minutos.

const hora = new Date().getHours()

if (hora >= 6 && hora <= 12) {
  console.log('Buenos dias')
} else if (hora > 12 && hora <= 20) {
  console.log('Buenas tardes')
} else {
  console.log('Buenas noches')
}

// 4º Calcula la media de tres notas y muestra si está apta, no apta, notable o sobre saliente. - Una persona está
// apta con un 5. - Una persona no apta de menos de un 5. - Notable de 5 a 7. - Sobre saliente de 7 al 10.

function getGrades(grade1, grade2, grade3) {
  const getMedia = (grade1 + grade2 + grade3) / 3
  return getMedia < 5
    ? 'No apta'
    : getMedia === 5
    ? 'Apta'
    : getMedia > 5 && getMedia < 7
    ? 'Notable'
    : 'Sobresaliente'
}

console.log(getGrades(6, 4, 10))

// 5º Según una variable dia y otra mesNacimiento , calcular el horóscopo de la persona.

// 6º Según una variable llamada numero , calcule si es par o inpar.

function numberOdd(value) {
  return value % 2 === 0 ? 'El número es par' : 'El número es impar'
}

console.log(numberOdd(1))

// 7º Usa una variable y di si es positivo o negativo.

function checkBoolean(value) {
  return value ? true : false
}

console.log(`La variables es ${checkBoolean('')}`)

// 8º Di si un número es mayor de 100.

function checkHigher100(value) {
  return value > 100
    ? `el valor ${value} es mayor a 100`
    : value === 100
    ? `el valor ${value} es igual a 100`
    : `el valor ${value} es menor a 100`
}

console.log(checkHigher100(100))

// 9º Usa 3 variables que contengan un número y di si el tercero es igual a la suma del primero y el segundo.

function checkNumberHigher(value1, value2, value3) {
  return value1 + value2 === value3
    ? 'El 3º valor es igual a la suma del 1º y 2º'
    : 'El 3º valor no es igual a la suma del 1º y 2º'
}

console.log(checkNumberHigher(1, 3, 3))

// 10º Según los siguientes objetos.
var square = {
  sideOne: 1,
  sideTwo: 3,
  typeOfGemotricFigure: 'Cuadrado',
}
var circle = {
  radius: 5,
  typeOfGemotricFigure: 'Círculo',
}

const pi = 3.14
const squareArea = square.sideOne * square.sideTwo
const circleArea = circle.radius * pi

console.log(`el área del cuadrado es ${squareArea}`)
console.log(`el área del círculo es ${circleArea}`)
