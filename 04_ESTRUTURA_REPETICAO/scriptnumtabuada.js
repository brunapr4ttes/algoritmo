let numero, resultado, quantos

        numero = Number(prompt("Digite o número para saber sua tabuada"))
        quantos = Number(prompt("Digite até quanto você quer"))
        
        for(let i = 0; i<=quantos; i++){
            resultado = numero * i
            document.write(`${resultado} // \n`)

        }