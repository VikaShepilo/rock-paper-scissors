let data=process.argv;
let argumentsMoves = data.slice(2)
let amountMoves = argumentsMoves.length
let part = (amountMoves - 1) / 2
let KeyNew = require('./key.js')
let Hmac = require('./hmac.js')
let DefinitionOfVictory = require('./victory.js')
class TableWinLoseDraw {
    constructor (cointMoves) {
        this.cointMoves = cointMoves
    }
    createArrayForTable() {
        let arrInfo = []
        for (let i = 1; i <= this.cointMoves; i++){
            let objLine = {'move': i}
            for (let j = 1; j <= this.cointMoves; j++) {
                function fillinTable(){ return i == j ? 'draw' : (j <= i + part && i < j ? 'win' : (i <= j + part && i < j ? 'lose' : (j <= i + part && j < i - part ? 'win' : 'lose')))}
                objLine[j] = fillinTable()}
        arrInfo.push(objLine)}
    return arrInfo}
}
if (argumentsMoves.length <= 1 || (argumentsMoves.length - 2) % 2 == 0) {
    console.log('There must be more than two arguments and an odd number. Example: rock paper scissors')
}else {
    let valueArr = argumentsMoves.map((item) => {return item})
    if (valueArr.some((item, indx) =>{return valueArr.indexOf(item) != indx}) == true) {
        console.log('Arguments must be different. Example: rock paper scissors')
    }else {
        function selectionСomputer(amount) {
            return Math.floor(Math.random() * amount)
        }
        function startGame(){
            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            })
            let key = new KeyNew()
            let keyComputer = key.generationKey()
            let choiceСomputer = selectionСomputer(amountMoves) + 1
            let sequence = keyComputer + argumentsMoves[choiceСomputer]
            let countHMAC = new Hmac(sequence)
            console.log('HMAC: ' + countHMAC.countingHMAC())
            conclusionMenu()
            readline.question('What is your move? ', (moveUser)=>{
                let tableInfo = new TableWinLoseDraw(amountMoves, part)
                let infoAbotWin = new DefinitionOfVictory(choiceСomputer, moveUser, part)
                moveUser === '0' ? console.log('The end',process.exit(1)) : 
                    (moveUser === '?' ? console.table(tableInfo.createArrayForTable().reduce((acc, {move, ...x}) => { acc[move] = x; return acc}, {})) :
                        (moveUser < amountMoves + 1 && moveUser > 0 ? (console.log('Enter your move: ', argumentsMoves[moveUser - 1]), 
                                                                        console.log('Computer move: ', argumentsMoves[choiceСomputer - 1]),
                                                                        infoAbotWin.determiningWin(),
                                                                        console.log('HMAC key: ', keyComputer)) : conclusionMenu()))
                readline.close()
                startGame()
            })    
        }
        startGame()
    }
}
function conclusionMenu() {
    console.log('Available moves:')
    argumentsMoves.map((i, index) => console.log(index+1 + ' - ' + i))
    console.log('0 - exit')
    console.log('? - help')
}   