let valor, conta, total = 0, quantidade = 0
                                                        

        alert("Quando terminar de inserir todas as contas digite [0]")

        do{
            conta = prompt("Digite o nome da conta")
            valor = Number(prompt(`Digite o valor da conta de [${conta}]:`))

            if(isNaN(valor) || valor === 0 || conta == 0){
                let sair = confirm("Deseja finalizar o processo?")
                if(sair){
                    break
                }
                else{
                    continue
                }
            }

            total = total + valor

            document.write(`[${conta}] - R$${valor}<br>`)
            
            quantidade++
        }while(true)

        document.write(`<br>   TOTAL: R$${total.toFixed(2)} de [${quantidade}] contas`)