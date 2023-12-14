let modelo, preço, valorEntrada, saldo

modelo = prompt("Qual é o modelo do veículo? ")
preço = prompt("Qual é o valor do veículo? ")

valorEntrada = preço / 2
saldo = valorEntrada / 12

document.write(`O valor do saldo em 12x é de R$${saldo.toFixed(2)}`)