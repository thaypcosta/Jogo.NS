alert('Boas-vindas ao Jogo do Número Secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;


// enquanto chute não for igual ao n.s.
while (chute!= numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
// se o chute for igual ao número secreto
    if (numeroSecreto == chute) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas}`);
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else{
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++
    }
}
