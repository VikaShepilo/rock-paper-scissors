class DefinitionOfVictory {
    constructor (moveСomputer, moveUser, part){
        this.moveСomputer = moveСomputer
        this.moveUser = moveUser
        this.part = part
    }
    determiningWin() {
        if (this.moveСomputer == this.moveUser){
            return console.log('Win draw')
        }else if (this.moveUser <= this.part) {
            for (let i = this.moveUser; i < parseInt(this.moveUser) + parseInt(this.part) + 1; i++){
                if (this.moveСomputer === i){return console.log('You win!')
                }}
            return console.log('You did not win!')
        }else {
            for (let i = parseInt(this.moveUser) - parseInt(this.part); i < this.moveUser; i++){
                if (this.moveСomputer === i){return console.log('You did not win!')
                }}
            return console.log('You win!')
}}}
module.exports = DefinitionOfVictory