const calcular = document.querySelector('#calcular');

function imc(event) {
    event.preventDefault();
    const nome = document.querySelector('#nome').value;
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;
    const resultado = document.querySelector('#resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1)
        let classificacao = ""

        if (valorIMC < 18.5) {
            classificacao = 'IMC baixo'
            resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está com o ${classificacao}`
        } else if (valorIMC > 18.6 && valorIMC < 24.9) {
            classificacao = 'IMC adeguado'
            resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está com o ${classificacao}`
        } else if (valorIMC > 25.0 && valorIMC < 29.9) {
            classificacao = 'IMC levemente acima'
            resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está com o ${classificacao}`
        } else if (valorIMC > 30.0) {
            classificacao = 'está obeso'
            resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está com o ${classificacao}`
        } else {
            resultado.textContent = 'me pegou'
        }

    } else {
        resultado.textContent = 'preencha todos os dados'
    }

}

calcular.addEventListener('click', imc)