import analyzeArray from "./analyzeArray"

test('calculates the average', () => {
    let inputArray = [1,2,3,4,5]
    let average = analyzeArray(inputArray).average
    expect(average).toBe(3)
})

test('finds the minimum', () => {
    let inputArray = [1,2,3,4,5]
    let minimum = analyzeArray(inputArray).minimum
    expect(minimum).toBe(1)
})

test('finds the maximum', () => {
    let inputArray = [1,2,3,4,5]
    let maximum = analyzeArray(inputArray).maximum
    expect(maximum).toBe(5)
})

test('calculates the length', () => {
    let inputArray = [1,2,3,4,5]
    let length = analyzeArray(inputArray).length
    expect(length).toBe(5)
})

test('it returns null if the input array is empty', () => {
    expect(analyzeArray([])).toBeNull
})

test('it returns null if the input array does not include only numbers', () => {
    expect(analyzeArray(['a','b',3,5])).toBeNull
})