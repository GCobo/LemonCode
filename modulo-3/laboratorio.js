const product = { count: 3, price: 12.55, type: 'libro' }

const typeAlimentacion = 'alimentacion'
const typeLibro = 'libro'

const getIVA =
  product.type === typeAlimentacion
    ? 0.1
    : product.type === typeLibro
    ? 0.04
    : 0.21

// Calcular el IVA

function getPriceWithIVA(count, price, type) {
  return (price * getIVA + price) * count
}

console.log(
  `el precio total con IVA será de ${getPriceWithIVA(
    product.count,
    product.price,
    product.type,
  )}€ para un producto de tipo ${product.type}`,
)

// Calcular sueldo neto en nómina

const empleado = {
  bruto: 12000,
  hijos: 2,
  pagas: 14,
}

function getIRPF(value, numberChildren) {
  let irpf = value < 12000 ? 0 : value < 24000 ? 8 : value < 34000 ? 16 : 30

  if (numberChildren > 0) {
    irpf = irpf - 2
  }

  if (irpf < 0) {
    irpf = 0
  }

  return irpf
}

function getSalary() {
  return (
    empleado.bruto -
    (empleado.bruto * getIRPF(empleado.bruto, empleado.hijos)) / 100
  )
}

function getSalaryMonthly() {
  return getSalary() / empleado.pagas
}

console.log(`El salario neto anual será de ${getSalary()}€`)
console.log(`El salario neto mensual será de ${getSalaryMonthly()}€`)
