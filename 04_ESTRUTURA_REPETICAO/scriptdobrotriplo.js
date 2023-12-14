alert("Digite [0] para sair do APP")

        do{
            let numero = Number(prompt("Digite um número"))

            if(isNaN(numero) || numero === 0){
                let sair = confirm("Confirma a saída?")// 0 ou 1
                if(sair){
                    break //acaba ali e desconsidera oq tiver em seguida
                }else{
                    continue //retorna ao começo da instrução
                }
            }
            else if(numero % 2 === 0){
                alert(`o dobro de [${numero}] é [${numero * 2}]`)
            }
            else if(numero % 2 !== 0){
                alert(`o triplo de [${numero}] é [${numero * 3}]`)
            }
        }while(true)