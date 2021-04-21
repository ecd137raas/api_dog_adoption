const { sum } = require('../src/sum')

describe('sum', () => {
  it('Deveria somar os valores corretamente', () => {
    const result = sum(3, 4)
    expect(result).toBe(7)
  })

  it('Deveria levantar uma exceção quando os argumentos não são números', () => {
    expect(() => sum('teste', true)).toThrow()
  })
})
