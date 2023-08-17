let numero, raiz 

numero = Number(prompt("Digite um número para raiz quadrada"))

raiz = Math.sqrt(numero)
alert(raiz)

if(raiz === Math.floor(raiz)){
    alert(`A raiz do número ${numero} = ${raiz}`)
}else{ 
    alert(`Não existe raiz exata para ${numero}`)
}