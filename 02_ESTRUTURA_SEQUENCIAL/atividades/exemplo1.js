// 1º Declarar todas as variáveis
let nome, anoNascimento, anoAtual, idade 

// 2º Variáveis que irão receber valor
nome = prompt("Digite o seu nome: ")
anoNascimento = prompt("Digite o ano em que nasceu: ")
anoAtual = prompt("Digite o ano atual: ")

// 3º Casting nas variáveis que possuem valor numérico
anoNascimento = parseInt(anoNascimento)
anoAtual = Number(anoAtual)

// 4º Processar as variáveis que possuem valor
idade = anoAtual - anoNascimento

// Mostrar resultado do código
document.write(`Olá ${nome}, você tem ${idade} anos`)