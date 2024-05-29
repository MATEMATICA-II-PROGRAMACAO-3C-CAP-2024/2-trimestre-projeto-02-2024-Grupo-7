const numeroSenha= document.querySelector('.parametro-senha__botao'); 
const numeroSenha= document.querySelector('.parametro-senha-_texto');
let tamanhoSenha=12;
botoes[0].onclick= diminuiTamanho;
botoes[1].onclick= aumentaTamanho;
console.log(botoes);

function diminuiTamanho(){
tamanhoSenha = tamanhoSenha - 1;
numeroSenha.textContent= tamanhoSenha
}

function aumentaTamanho(){
tamanhoSenha = tamanhoSenha + 1;
numeroSenha.textContent = tamanhoSenha;
}