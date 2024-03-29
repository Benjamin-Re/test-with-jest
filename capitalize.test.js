import capita from './capitalize'

test('it capitalizes the first letter of the string elephant', () => {
    expect(capita('elephant')).toBe('Elephant')
})

it('returns Mouse for the input mouse', () => {
    expect(capita('mouse')).toBe('Mouse')
})