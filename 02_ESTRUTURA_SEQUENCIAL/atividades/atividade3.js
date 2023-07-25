let precoKg, consumoG, valorPago

precoKg = prompt("Qual o preço / Kg? ")
consumoG = prompt("Quanto o cliente consumiu em Gramas? ")

valorPago = (consumoG * precoKg) / 1000

document.write(`O valor a ser pago pelo cliente é de R$${valorPago}`)