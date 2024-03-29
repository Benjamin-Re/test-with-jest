function cesar (input) {
    // 97 to 122 lower
    // 65 to 90 upper
    let offset = 0
    let key = 1
    let cypher = ''
    for(let i = 0; i < input.length; i++){
        if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90){
            offset = 65
            let index = input.charCodeAt(i)-offset
            let shiftedIndex = ((index + key) % 26) + offset
            cypher += String.fromCharCode(shiftedIndex)
        } else if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) {
            offset = 97
            let index = input.charCodeAt(i)-offset
            let shiftedIndex = ((index + key) % 26) + offset
            cypher += String.fromCharCode(shiftedIndex)
        } else {
            cypher += input[i]
        }
    }
    return cypher
}

export default cesar