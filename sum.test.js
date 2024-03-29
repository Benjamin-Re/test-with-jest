// const sum = require('./sum')
import sum from './sum'

test('adds 1 and 2', () => {
    expect(sum(1,2)).toBe(3)
})