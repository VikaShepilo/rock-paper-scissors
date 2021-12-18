class Hmac {
    constructor (key){
        this.key = key
    }
    countingHMAC() {
        let crypto = require('crypto')
        let HMAC = crypto.createHmac('sha256', this.key)  
            .update('GeeksforGeeks')
            .digest('hex')
        return HMAC
}}
module.exports = Hmac