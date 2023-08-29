let idade, soma = 0, cont = 0, pessoas, media

pessoas = Number(prompt(`Digite a quantidade de pessoas: `))
for (cont = 1; cont <= pessoas; cont++) {
    idade = Number(prompt(`Digite a idade da pessoa ${cont}: `))
    
    soma = soma + idade
    media = soma / pessoas

    if (isNaN(idade) || isNaN(pessoas)) {
        alert(`Dados Inválidos, por favor, insira dados válidos!`)
    }
    else if(idade >= 18){
        document.write('<br>Você é maior de idade <br>'+idade)
    }
    else{
        document.write('<br>Você é menor de idade <br>'+idade)

    }
}
document.write(`<br> A soma de todas as idades é: ${soma}. <br> A média das idades é: ${media} <br>`)