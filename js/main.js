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

// Personalização via URL: ?nome=João&mesa=alpha
const urlParams = new URLSearchParams(window.location.search);
const nome = urlParams.get('nome');
const mesa = urlParams.get('mesa');

if (nome) {
    document.getElementById('nomeConvidado').innerText = decodeURIComponent(nome);
}

if (mesa) {
    const simbolos = {
        alpha:   { nome: 'Alpha',   simbolo: 'α' },
        beta:    { nome: 'Beta',    simbolo: 'β' },
        delta:   { nome: 'Delta',   simbolo: 'δ' },
        gamma:   { nome: 'Gamma',   simbolo: 'γ' },
        epsilon: { nome: 'Epsilon', simbolo: 'ε' },
        omega:   { nome: 'Omega',   simbolo: 'ω' }
    };
    const chave = mesa.toLowerCase();
    const dados = simbolos[chave];
    const mesaElement = document.getElementById('mesaConvidado');
    if (mesaElement) {
        if (dados) {
            mesaElement.innerHTML = `Mesa: <span class="simbolo-grego">${dados.simbolo}</span> <strong>${dados.nome}</strong>`;
        } else {
            mesaElement.innerHTML = `Mesa: <strong>${mesa}</strong>`;
        }
    }
}

function enviarWhatsapp() {
    const opcaoSim = document.getElementById('opcaoSim').checked;
    const opcaoNao = document.getElementById('opcaoNao').checked;
    const nomeConvidado = document.getElementById('nomeConvidado').innerText;

    // Substitua pelo número real (formato internacional, sem + e sem espaços)
    const numeroWhatsApp = "258846288259";

    if (!opcaoSim && !opcaoNao) {
        alert("Por favor, selecione se você vai comparecer ou não, antes de enviar.");
        return;
    }

    let mensagem = "";

    if (opcaoSim) {
        mensagem = `Olá Ramiro e Isabel! Sou *${nomeConvidado}*.\n\nTenho a honra de confirmar a minha presença no vosso noivado. Será um prazer celebrar este momento tão especial ao lado de vocês.\n\nContem comigo!`;
    } else if (opcaoNao) {
        mensagem = `Olá Ramiro e Isabel! Sou *${nomeConvidado}*.\n\nAgradeço imensamente o convite para o vosso noivado. Infelizmente, não poderei comparecer, mas desejo a vocês toda a felicidade do mundo neste novo capítulo.\n\nUm grande abraço!`;
    }

    const mensagemCodificada = encodeURIComponent(mensagem);
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

    window.open(url, '_blank');
}