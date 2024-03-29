

function analyzeArray (inputArray) {
    if (inputArray.length === 0) {
        return null
    }

    if(inputArray.every(element => typeof element !== 'number')){
        return null
    }

    let average = inputArray.reduce((accumulator, nextValue)=>{
        return accumulator + nextValue
    }, 0)/inputArray.length

    let minimum = Math.min(...inputArray)

    let maximum = Math.max(...inputArray)

    let length = inputArray.length

    return {
        average: average,
        minimum: minimum,
        maximum: maximum,
        length: length
    }
}

export default analyzeArray


