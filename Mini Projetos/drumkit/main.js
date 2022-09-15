'use strict'; 

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

const criarDiv = (texto) => {
    const div = document.createElement('div')
    div.textContent = texto
    div.classList.add('key')
    div.id = texto
    document.querySelector('#container').appendChild(div)
}

const exibir = (sons) => Object.keys(sons).forEach(criarDiv)

const tocarSom = (letra) =>{
    const audio = new Audio(`songs/${sons[letra]}`);
    audio.play();
}

const ativarDiv = (evento) => {
    const letra = evento.target.id;
    const letraPermitida = sons.hasOwnProperty(letra)
    if (letraPermitida){
    tocarSom(letra)
    }
}

document.querySelector('#container').addEventListener('click', ativarDiv)


exibir(sons)