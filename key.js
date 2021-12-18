class KeyNew {
    constructor (){}
    generationKey(n) {
        n = n || 64
        let result = ''
        while (n--){result += Math.floor(Math.random()*16).toString(16).toUpperCase()}
        return result
}}
module.exports = KeyNew