let valorsaque, notacem, notacinq, notadez, resto

valorsaque = Number(prompt("Digite o valor do saque: "))

if(valorsaque%10 != 0){
    alert(`Digite uma das seguintes notas disponíveis: R$100, R$50 ou R$10`)
    location.reload()
}

notacem = valorsaque / 100
resto = valorsaque % 100

notacinq = Math.floor(resto / 50)
resto = resto % 50 

notadez = Math.floor(resto / 10)
resto = resto % 10 

if(){
    document.write(`Notas de R$100 ${notacem}`)
}else if(){
    document.write(`Notas de R$50 ${notacinq}`)
}else if(){
    document.write(`Notas de R$10 ${notadez}`)
}
    //alert(`Notas 100 ${notacem} - Resto ${resto}`)

