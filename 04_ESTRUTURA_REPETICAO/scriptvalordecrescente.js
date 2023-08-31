let numero

        numero = Number(prompt("Insira um número:"))

        if(numero <= 0){
            alert("Digite um valor acima de 1")
            location.reload()
        }
        for(let i = 1; numero >= i; numero--){
            document.write(` ${numero}\n//`)
        }