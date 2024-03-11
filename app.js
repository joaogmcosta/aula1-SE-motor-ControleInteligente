// // Mudar o Título
// let titulo = document.querySelector('h1'); //document: altera o conteudo do html, .querySelector :seleciona uma tag  específica
// titulo.innerHTML = 'Jogo do Número Secreto';

// //Mudar o paragrafo
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//Numero aleatorio
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
//Tentativas
let tentativas = 1;

//Função que escreve na tela para uma <tag> com o seu <texto>
function escreverTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

//Função que exibe a mensagem inicial do Jogo
function mensagemInicial(params) {
    escreverTextoNaTela('h1', 'Bem-Vindo(a) ao Jogo do Número Secreto');
    escreverTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

//Função que gera um numero aleatório
function gerarNumeroAleatorio() {
    return parseInt(Math.random() *10 +1);    
}
//Função que limpa o campo
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';    
}
// Função que reinicia o Jogo 
function reiniciarJogo() {
    mensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    tentativas = 1;
    limparCampo();    
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
mensagemInicial();

//Função que verifica se o botão chute foi clicado
function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        escreverTextoNaTela('h1', 'Acertou!');
        escreverTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} !`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        //reiniciarJogo();
    }else{
        if (chute > numeroSecreto) {
            escreverTextoNaTela('p', 'O numero secreto é menor');
        } else {
            escreverTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas ++;
        limparCampo();
    }
}