const numeroSenha= document.querySelector('.parametro-senha__texto');
let tamanhoSenha=12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas= "ABCDEFGHIJKLMNOPQRSTUVXYWZ";
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes= document.querySelectorAll('.parametro-senha__botao'); 
const campoSenha= document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha= document.querySelectorAll('.forca');

botoes[0].onclick= diminuiTamanho;
botoes[1].onclick= aumentaTamanho;


function diminuiTamanho(){
    if (tamanhoSenha > 1){
        //tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
}
numeroSenha.textContent= tamanhoSenha;
geraSenha();
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
//tamanhoSenha = tamanhoSenha+1;
tamanhoSenha++}
numeroSenha.textContent = tamanhoSenha;
geraSenha();
}
for (i=0; i < checkbox.length;i++){
    checkbox[i].onclick = geraSenha;
console.log(checkbox);
}


function geraSenha (){
    let alfabeto = '';
    if (checkbox[0].checked){
    alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked){
    alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked){
    alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
    alfabeto = alfabeto + simbolos;
    }
    let senha= '';
    for (let i = 0; i < tamanhoSenha;i++) {
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha(alfabeto.length);

}

function classificaSenha(){
    let entropia= tamanhoSenha * Math.log2(aumentaTamanho);
    console.log(entropia);
    forcaSenha.classList.remove('fraca','media','forte');
    if (entropia > 57){
    forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57) {
    
    forcaSenha.classList.add('media');
    
    } else if (entropia <= 35){
    
    forcaSenha.classList.add('fraca');
    }
    const valorEntropia = document.querySelectorAll('.entropia');
    valorEntropia.textContent= 2**Math.floor(entropia)/(100e6*60*60*24);
    }
