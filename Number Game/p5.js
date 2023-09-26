let rendomnumber = (parseInt(Math.random() * 100 + 1));
const submit = document.querySelector('#subl')
const userinput = document.querySelector('#guessfield')
const guessslot = document.querySelector('.guesses')
const reamining = document.querySelector('.lastresult')
const loworhigh = document.querySelector('.lowhigh')
const startover = document.querySelector('.result')

const p = document.createElement('p')

let prevguess = []
let numguess = 1

let playgame = true
if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userinput.value);
        console.log(guess);
        validateguess(guess);

    })
}

function validateguess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')
    }
    else if (guess < 1) {
        alert('please enter a number more than 1')
    }
    else if (guess > 100) {
        alert('please enter a number less than 100')
    }
    else {
        prevguess.push(guess)
        if (numguess === 10) {
            displayguess(guess)
            displaymessage(` Game over. Rendom number was ${rendomnumber}`)
            endgame()
        } else {
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess) {
    if (guess === rendomnumber) {
        displaymessage(`you guessed right`)
        endgame()
    }
    else if (guess < rendomnumber) {
        displaymessage(`number is too low`)
    }
    else if (guess > rendomnumber) {
        displaymessage(`number is too hight`)
    }
}

function displayguess(guess) {
userinput.value = ''
 guessslot.innerHTML += `${guess} , `
 numguess++;
 reamining.innerHTML = `${11 - numguess}`
}

function displaymessage(message) {
    loworhigh.innerHTML = `<h2> ${message}</h2>`
}


function endgame() {
    userinput.value = ''
    userinput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame"> Start new game</h2>`;
    startover.appendChild(p)
    playgame = false
    newgame();
}

function newgame() {
  const newgamebutton = document.querySelector('#newgame')
  newgamebutton.addEventListener('click', function(e){
    rendomnumber= (parseInt(Math.random() * 100 + 1));
    prevguess = []
    numguess = 1
    guessslot.innerHTML= ''
    reamining.innerHTML=`${10 - numguess}`
    userinput.removeAttribute('disavled')
    startover.removeChild(p)
    playgame = true
  })
}
