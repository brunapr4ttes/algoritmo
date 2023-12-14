let idade=[], i=0, cont=1, troca=0, maior=0

while(1 == 1){

    idade[i]=Number(prompt(`Digite a idade ${cont}`))

    if (idade[i]>idade[cont]) {

        maior = idade[i]
    }
i++
    if (confirm("Deseja continuar?") == true) {
        continue
      } else {
          break  
      }

  }
  document.write(`Maior idade: ${maior}`)