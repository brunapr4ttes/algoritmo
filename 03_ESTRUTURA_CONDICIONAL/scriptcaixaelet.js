let valorsaque, notacem, notacinq, notadez, resto

valorsaque = Number(prompt("Digite o valor do saque: "))

if(valorsaque%10 != 0){
    alert(`Digite uma das seguintes notas disponíveis: R$100, R$50 ou R$10`)
    location.reload()
}

notacem = Math.floor(resto / 100)
resto = valorsaque % 100

notacinq = Math.floor(resto / 50)
resto = resto % 50 

notadez = Math.floor(resto / 10)
resto = resto % 10 

if(notacem > 0){
    document.write(`Receba ${notacem} cédulas de R$100`)
}if(notacinq > 0){
    document.write(`Receba ${notacinq} cédulas de R$50`)
}if(notadez > 0){
    document.write(`Receba ${notadez} cédulas de R$10`)
}
    //alert(`Notas 100 ${notacem} - Resto ${resto}`)

