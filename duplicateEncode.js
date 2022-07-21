function duplicateEncode(word){
    let normalizeWord = word.toUpperCase()
    let tempMap = {}
    let encodedWord = []
    for (let i in normalizeWord){
        if (tempMap[normalizeWord[i]]){
            tempMap[normalizeWord[i]] = ")"
        } else {
            tempMap[normalizeWord[i]] = "("
        }
    }
    for (let i in normalizeWord){
        encodedWord.push(tempMap[normalizeWord[i]])
    }
    return encodedWord.join("")
}

duplicateEncode("arroz")
duplicateEncode("cola")

