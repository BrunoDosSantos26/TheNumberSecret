const telaCheia = document.documentElement;
const telaCheiaText = document.getElementById('fullscreen');


function fullscreen () {
    if (chute === "tela cheia") {
        telaCheiaText.textContent = 'Fale "Sair da tela cheia"';
        if (telaCheia.requestFullscreen){
            telaCheia.requestFullscreen();
        }
        else if(telaCheia.msRequestFullScreen){
            telaCheia.msRequestFullscreen();
        }
        else if(telaCheia.mozRequestFullScreen){
            telaCheia.mozRequestFullscreen();
        }
        else {
            telaCheia.webkitRequestFullscreen();
            telaCheia.exit
        }
    }
}

function fullscreenSair () {
    if (chute === "Sair da tela cheia") {
        telaCheiaText.textContent = 'Fale "Tela cheia"';
        if (telaCheia.exitFullscreen){
            telaCheia.exitFullscreen();
        }
        else if(telaCheia.msExitFullscreen){
            telaCheia.msExitFullscreen();
        }
        else if(telaCheia.mozCancelFullScreen){
            telaCheia.mozCancelFullScreen();
        }
        else {
            telaCheiadocument.webkitExitFullscreen();
        }
    }
}