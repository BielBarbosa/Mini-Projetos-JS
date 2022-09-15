'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.querySelector('#segundos')
    const minutos = document.querySelector('#minutos')
    const horas = document.querySelector('#horas')
    const dias = document.querySelector('#dias')

    const qntSegundos = tempo % 60
    const qntMinutos = Math.floor(( tempo % (60 * 60)) /60 )
    const qntHoras = Math.floor(( tempo % (60 * 60 * 24)) / (60 * 60) )
    const qntDias = Math.floor( tempo / (60 * 60 * 24))

    segundos.textContent = formatarDigito(qntSegundos)
    minutos.textContent = formatarDigito(qntMinutos)
    horas.textContent = formatarDigito(qntHoras)
    dias.textContent = formatarDigito(qntDias)

}

const contagemRegressiva = (tempo) => {
    const pararcontagem = () => clearInterval(id);
    const contar = () => { 
        if (tempo === 0 ){
            pararcontagem()
        }  
        atualizar(tempo)
        tempo--;
    }
    const id = setInterval(contar, 1000)
}

const tempoRestante = () => {
    const dataEvento = new Date ('2023-01-11 00:00:00');
    const hoje = Date.now() ;
    return Math.floor((dataEvento - hoje) / 1000)
}

contagemRegressiva(tempoRestante());