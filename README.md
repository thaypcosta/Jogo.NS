##Jogo do Número Secreto

Este é um jogo simples de adivinhação de números, desenvolvido em JavaScript, onde o jogador tenta descobrir o número secreto gerado.
Como funciona?

    O número secreto é pré-definido no código.
    O jogador precisa adivinhar o número entre 1 e 10.
    O programa fornecerá dicas indicando se o número secreto é maior ou menor que o chute.
    Quando o jogador acertar, o jogo exibe uma mensagem de vitória.

Requisitos

    Navegador da Web com suporte a JavaScript.

Como executar?

    Copie o código abaixo e cole em um arquivo index.html com as tags <script> para incluir o JavaScript:

    alert('Boas-vindas ao Jogo do Número Secreto');
    let numeroSecreto = 5;
    console.log(numeroSecreto);
    let chute;

    while (chute != numeroSecreto) {
        chute = prompt('Escolha um número entre 1 e 10');
        if (numeroSecreto == chute) {
            alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
        } else {
            if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}`);
            } else {
                alert(`O número secreto é maior que ${chute}`);
            }
        }
    }

    Abra o arquivo index.html no navegador.

    Siga as instruções do jogo exibidas nas janelas de alerta.

Personalização

    Alterar o número secreto: Modifique a variável numeroSecreto no código para escolher outro número.
    Ampliar o intervalo de números: Ajuste as mensagens e as instruções no prompt.

Notas

Este é um projeto inicial para quem está aprendendo JavaScript. É ideal para entender conceitos básicos como:

    Estruturas de repetição (while)
    Condicionais (if/else)
    Interação com o usuário por meio do método prompt.

Melhorias futuras

    Gerar o número secreto aleatoriamente.
    Adicionar limites de tentativas.
    Melhorar o design e a interação utilizando HTML e CSS.
