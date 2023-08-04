function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute
    if (chute === "jogar novamente") {
        startPorVoz()
    }
    
    if (chute === "tela cheia") {
        fullscreen ()
    }
    if (chute === "Sair da tela cheia") {
        fullscreenSair ()
    }

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button type="submit" id="start" class="btn-start">Jogar Novamente</button>
            <div class="jogar-novamente">
            <p>Pressione "Jogar Novamente"</p>
            <p class="paragraph-ou">ou</p>
            <p>Fale "Jogar Novamente"</p>
            </div>
        `
        let start = document.getElementById("start");
        start.onclick = () => {window.location.reload()};

        recognition.addEventListener('end', () => recognition.start());
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor<i class="fa-solid fa-arrow-down"></i></div>
        `
    }   else {
        elementoChute.innerHTML += `
    <div>O número secreto é maior<i class="fa-solid fa-arrow-up"></i></div>
    `}
}


function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}