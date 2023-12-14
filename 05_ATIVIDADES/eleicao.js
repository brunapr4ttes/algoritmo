let candidato1 = 0, candidato2 = 0, candidato3 = 0, candidato4 = 0, voto, sair, branco = 0,  nulo = 0, soma = 0
        alert("Digite 0 para saiar do loop: ")
        
        do{
            voto = Number(prompt("Em que candidato você irá votar: "))
            if(voto === 0){
                sair = confirm("Votos finalizados? ")
                if(sair){
                    break
                }else{
                    continue
                }
            }

            if(voto === 1){

                candidato1++

            }else if(voto === 2){

                candidato2++

            }else if(voto === 3){

                candidato3++

            }else if(voto === 4){

                candidato4++

            }else if(voto === 5){

                branco++

            }else if(voto === 6){

                nulo++

            }
            soma = candidato1 + candidato2 + candidato3 + candidatoo4 
        }while(true)
        
        document.write("<br> Votos do candidato 1 :"+candidato1)
        document.write("<br> Votos do candidato 2 :"+candidato2)
        document.write("<br> Votos do candidato 3 :"+candidato3)
        document.write("<br> Votos do candidato 4 :"+candidato4)
        document.write("<br> Votos brancos :"+branco)
        document.write("<br> Soma dos votos:"+soma)