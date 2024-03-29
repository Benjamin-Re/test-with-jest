import reversal from './reversal'

test('it reverses the string elephant to tnahpele', () => {
    expect(reversal('elephant')).toBe('tnahpele')
})

test('it reverses the string mouse to esuom', () => {
    expect(reversal('mouse')).toBe('esuom')
})