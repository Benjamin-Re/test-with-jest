import calc from './calc'

test('it adds 1 and 2 and returns 3', () => {
    expect(calc.add(1,2)).toBe(3)
})

test('it subtracts 1 from 3 and returns 2', () => {
    expect(calc.subtract(3,1)).toBe(2)
})

test('it multiplies 2 and 3 and returns 6', ()=> {
    expect(calc.multiply(2,3)).toBe(6)
})

test('it divides 4 by 2 and returns 2', ()=> {
    expect(calc.divide(4,2)).toBe(2)
})
