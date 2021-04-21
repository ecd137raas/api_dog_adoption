const sum = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Argumentos devem ser numeros')
  }
  return a + b
}

module.exports = { sum }
