let num

do{
    num = Number(prompt("Digite um número"))
    if(num === 0 || isNaN(num)){
        alert("Digite um número válido!")
    }

    alert(`Os números pares 1 e ${num}`)
}while(num === 0 || isNaN(num))

        
        
        for(let i = 1; num >= i; i++)
            if(i % 2 === 0){
                document.write(`PAR: ${i} <br> \n`)
            }