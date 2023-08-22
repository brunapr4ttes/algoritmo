let num

//validação
do{ 
    num = Number(prompt(`Digite um número: `))
    if(num === 0 || isNaN(num)){
        alert(`Digite um número válido! `)
    }
}while(num === 0 || isNaN(num))

//lógica
for(let i = 0; i<= num; i++){
    //document.write(`Valor de i: ${i} e número digitado: ${num} <br>`)
    if(i%2 === 0){
        document.write(`${i} <br>`) //Para que apareçam apenas os números pares entre i e o número digitado
    }
}