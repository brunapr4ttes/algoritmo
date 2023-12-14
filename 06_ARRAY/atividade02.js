let soma = 0, numeros = []

for(let i = 0; i < 5; i++){
    numeros[i] = Number(prompt(`Digite um valor para o índice ${i} do vetor`))
    
    soma = soma + numeros[i]
}

document.write(soma+`<br>`)
document.write(numeros+`<br>`)