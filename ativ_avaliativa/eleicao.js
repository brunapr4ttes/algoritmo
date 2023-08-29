let canditado1 = 0, canditado2 = 0, canditado3 = 0, canditado4 = 0, voto, sair, branco = 0,  nulo = 0, soma = 0
        alert("Digite 0 para saiar do loop: ")
        
        do{
            voto = Number(prompt("Em que candidato você irá votar: "))
            if(voto === 0){
                sair = confirm("Deseja parar? ")
                if(sair){
                    break
                }else{
                    continue
                }
            }

            if(voto === 1){

                canditado1++

            }else if(voto === 2){

                canditado2++

            }else if(voto === 3){

                canditado3++

            }else if(voto === 4){

                canditado4++

            }else if(voto === 5){

                branco++

            }else if(voto === 6){

                nulo++

            }
            soma = canditado1 + canditado2 + canditado3 + canditado4 
        }while(true)
        
        document.write("<br> Votos do candidato 1 :"+canditado1)
        document.write("<br> Votos do candidato 2 :"+canditado2)
        document.write("<br> Votos do candidato 3 :"+canditado3)
        document.write("<br> Votos do candidato 4 :"+canditado4)
        document.write("<br> Votos brancos :"+branco)
        document.write("<br> Soma dos votos:"+soma)