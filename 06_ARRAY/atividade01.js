let n ,num = []

        n = Number(prompt("Quantos números você quer cadastrar no Array?"))

        for(let i = 0; i < n; i++){
            num[i] = Number(prompt(`Digite um valor para o ${i}º índice do vetor`))
            document.write(`<br>${num[i]}`)
        }
        document.write(numeros)
        document.write(`<br>------------------------<br>`)
        
        for(let i = n-1; i >= 0; i--){
            document.write(numeros)
        }