let num, div = 0

do{
    num = Number(prompt(`Digite um número: `))
    if(num <= 0.0 || isNaN(num)){
        alert(`Digite um número válido!`)
    }
}while(num === 0.0 || isNaN(num))
debugger

for(let i = 0; i <= num; i++){
    if(num%i === 0){
        div++
    }
}
    if(div === 2){
        alert("O número "+num+" é primo.")
    }else{
        alert("O número "+num+" não é primo.")
    }




