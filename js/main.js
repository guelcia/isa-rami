function abrirConvite() {
    const envelopeScreen = document.getElementById('envelope-screen');
    
    envelopeScreen.classList.add('aberto');

    setTimeout(() => {
        envelopeScreen.style.opacity = '0';
        
        setTimeout(() => {
            envelopeScreen.style.display = 'none';
            const convite = document.getElementById('convite');
            convite.classList.remove('hidden');
            convite.style.opacity = '1';
            window.scrollTo(0, 0); 
        }, 1000);
    }, 3000); 
}

const urlParams = new URLSearchParams(window.location.search);
const nome = urlParams.get('nome');
if (nome) {
    document.getElementById('nomeConvidado').innerText = decodeURIComponent(nome);
}

function enviarWhatsapp() {
    const opcaoSim = document.getElementById('opcaoSim').checked;
    const opcaoNao = document.getElementById('opcaoNao').checked;
    const nomeConvidado = document.getElementById('nomeConvidado').innerText;

    const numeroWhatsApp = "5511999999999"; 

    if (!opcaoSim && !opcaoNao) {
        alert("Por favor, selecione se você vai comparecer ou não, antes de enviar.");
        return;
    }

    let mensagem = "";

    if (opcaoSim) {
        mensagem = `Olá Ramiro e Isabel! Sou *${nomeConvidado}*.\n\nTenho a honra de confirmar a minha presença no noivado de vocês. Será um prazer celebrar este momento tão especial ao lado de vocês.\n\nContem comigo!`;
    } else if (opcaoNao) {
        mensagem = `Olá Ramiro e Isabel! Sou *${nomeConvidado}*.\n\nAgradeço imensamente o convite para o noivado de vocês. Infelizmente, não poderei comparecer, mas desejo a vocês toda a felicidade do mundo neste novo capítulo.\n\nUm grande abraço!`;
    }

    const mensagemCodificada = encodeURIComponent(mensagem);
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    
    window.open(url, '_blank');
}