let horabrasil, horafranca

horabrasil = Number(prompt(`Digite a hora do Brasil em formato HH.MM`))
//Validação

if(isNaN(horabrasil) || horabrasil < 0) {
    alert(`Digite um horário válido! `) 
location.reload()
}
//Lógica

horafranca = horabrasil + 5
if(horafranca > 24){
    horafranca = horafranca - 24
}

alert(`hora Brasil ${horabrasil}, hora França ${horafranca}`)