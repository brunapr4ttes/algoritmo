let num1, num2

num1 = Number(prompt("Digite o valor do primeiro número: "))
num2 = Number(prompt("Digite o valor do segundo número: "))

if (num1 > num2) {
    console.log("O número " + num1 + " é maior que " + num2)
}else {
    console.log("O número " + num2 + " é maior que " + num1)
}