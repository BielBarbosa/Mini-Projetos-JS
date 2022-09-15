const buttons = document.querySelector('#buttons')
const automatico = document.querySelector('#automatic')
const semaforo = document.querySelector('#semaforo')
let colorIndex = 0;

const trafficLight = (event) => {
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const turnOn = {
    'red': () => semaforo.src = 'imgs/vermelho.png',
    'yellow': () => semaforo.src = 'imgs/amarelo.png',
    'green': () => semaforo.src = 'imgs/verde.png',
    'automatic': () => setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLight)