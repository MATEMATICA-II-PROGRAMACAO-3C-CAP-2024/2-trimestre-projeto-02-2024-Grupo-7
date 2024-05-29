const numeroSenha= document.querySelector('.parametro-senha__botao'); 
const numeroSenha= document.querySelector('.parametro-senha-_texto');
let tamanhoSenha=12;
botoes[0].onclick= diminuiTamanho;
botoes[1].onclick= aumentaTamanho;
//código omitido
const campoSenha= document.querySelector('#campo-senha');
const letrasMaiusculas= "ABCDEFGHIJKLMNOPQRSTUVXYWZ";
function geraSenha (){
    let senha= '';
    for (let i = 0; i < tamanhoSenha;i++) {
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiusculas[numeroAleatorio];
    console.log(letrasMaiusculas[numeroAleatorio]);
    }
    campoSenha.value = senha;
}
campoSenha.value = letrasMaiusculas;

function diminuiTamanho(){
    if (tamanhoSenha > 1)
tamanhoSenha = tamanhoSenha--;
numeroSenha.textContent= tamanhoSenha;
geraSenha
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
tamanhoSenha = tamanhoSenha++;}
numeroSenha.textContent = tamanhoSenha;
geraSenha;
}