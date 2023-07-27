let valor15, cliente, valorfinal, quinzemin

valor15 = prompt(`Qual o valor por cada 15 minutos de uso? `)
cliente = prompt(`Qual foi o tempo de uso do cliente em minutos? `)

quinzemin = Math.ceil(cliente / 15)
valorfinal = valor15 * quinzemin;
  
   document.write(`O valor a ser pago é R$ ${valorfinal.toFixed(2)}`);
    