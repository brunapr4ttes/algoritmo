let nota1, nota2, nota3, nota4, media

nota1 = Number(prompt("Digite a sua primeira nota: "))
nota2 = Number(prompt("Digite a sua segunda nota: "))
nota3 = Number(prompt("Digite a sua terceira nota: "))
nota4 = Number(prompt("Digite a sua quarta nota: "))

media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 6) {
    console.log("Aprovado!! Sua média foi de: " + media)
}else {
    console.log("Reprovado!! Sua média foi de: " + media)
}