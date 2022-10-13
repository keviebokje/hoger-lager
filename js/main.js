let computerNumber = Math.floor(Math.random() * 12) + 1;
let playerNumber = Math.floor(Math.random() * 12) + 1;
let userPoints = 100


const cn = document.querySelector('.computerN');
function randompc() {
    document.querySelector('.button1').disabled = true;
    computerNumber = Math.floor(Math.random() * 12) + 1;
    cn.textContent = computerNumber;
    console.log(computerNumber);
}
const buttonCpu = document.querySelector('.button1');
buttonCpu.addEventListener('click', randompc);

document.querySelector('.button1').disabled = false;


const pn = document.querySelector('.playerN');

const hoger = document.querySelector('.hoger');

const lager = document.querySelector('.lager');
const scoretekst = document.querySelector('.score')

function randomPN() {
    if(userPoints>0){
    document.querySelector('.button1').disabled = false;
    let playerNumber = Math.floor(Math.random() * 12) + 1;
    pn.textContent = playerNumber;
    if (playerNumber > computerNumber) {
        console.log('win')
        scoretekst.textContent = 'u won'
        userPoints = userPoints + 10
        playerpoints.textContent = userPoints
    }
    else {
        console.log('verloren')
        scoretekst.textContent = 'u lost'
        userPoints = userPoints - 10
        playerpoints.textContent = userPoints
    }
} else (
    alert('je bent af')
)
}
function randompn2() {
    if(userPoints>0){
    document.querySelector('.button1').disabled = false;
    let playerNumber = Math.floor(Math.random() * 12) + 1;
    pn.textContent = playerNumber;
    if (playerNumber < computerNumber) {
        console.log('win')
        scoretekst.textContent = 'u won'
        userPoints = userPoints + 10
        playerpoints.textContent = userPoints
    }
    else {
        console.log('verloren')
        scoretekst.textContent = 'u lost'
        userPoints = userPoints - 10
        playerpoints.textContent = userPoints
    }
}else (
    alert('je bent af')
)
}


function reset() {
    document.location.reload()
}

const buttonlower = document.querySelector('.lager')
buttonlower.addEventListener('click', randompn2)

const buttonhigh = document.querySelector('.hoger')
buttonhigh.addEventListener('click', randomPN)

const buttonreset = document.querySelector('.reset')
buttonreset.addEventListener('click', reset)

const playerpoints = document.querySelector('.points')
playerpoints.textContent = userPoints
