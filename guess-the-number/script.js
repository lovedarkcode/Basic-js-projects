let random = parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const starOver = document.querySelector('.resultParse')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true
if (playGame) {
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validGuess(guess)
    })
}

function validGuess(guess){
    if (isNaN(guess)) {
        alert("please add a valid number")
    }else if(guess < 1 || guess > 100){
        alert("please add a valid number")
    }else{
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`game over. Ramdom number was ${random}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if (guess === random) {
        displayMessage(`congratulations! you got it right`)
        endGame()
} else if (guess < random || guess > random) {
    displayMessage(`number not in range`)
}
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2><${message}</h2>`
}
function displayGuess(guess){
    userInput.value = " "
    guessSlot.innerHTML += ` ${guess} `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}
function newGame(){
    const newGameButton =  document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = " "
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}
function endGame(){
    userInput.value = " "
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p)
    playGame = false
}




