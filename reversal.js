function reversal (input) {
    let inputAsArray = input.split('')
    let output = []
    for (let index = inputAsArray.length - 1; index >= 0; index--) {
        output.push(inputAsArray[index])        
    }
    return output.join('')
}

export default reversal