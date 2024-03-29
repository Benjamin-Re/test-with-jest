import cesar from './cesar'

test('it shifts by one letter', () => {
    expect(cesar('a')).toBe('b')
})

test('it shifts by one letter and keeps the same case', () => {
    expect(cesar('A')).toBe('B')
})

test('it shifts by one letter and keeps the punctuation', () => {
    expect(cesar('a!')).toBe('b!')
})

test('it shifts by one letter and wraps from z to a', () => {
    expect(cesar('z')).toBe('a')
})