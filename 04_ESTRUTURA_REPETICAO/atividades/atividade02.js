let qtdchinchilas, anofazenda, totalchinchilas
//validações
qtdchinchilas = Number(prompt(`Digite o número de chinchilas inicial: `))
anofazenda = Number(prompt(`Durante quantos anos as chinchilas serão criadas? `))

totalchinchilas =  qtdchinchilas

for(let i = 1; i<= anofazenda; i++){
    totalchinchilas = totalchinchilas * 3
}
alert(`Iniciando com ${qtdchinchilas} chinchilasem ${anofazenda} anos você terá o total de ${totalchinchilas} chinchilas`)

//chin = Number(prompt(`Digite o número de chinchilas inicial: `))
//anos = Number(prompt(`Durante quantos anos as chinchilas serão criadas? `))

//anoini = 1 
//prev = chin ** anos

//if(chin <= 1){
    //alert("digite um número válido de chinchilas")
///}
//while (anoini < anos){
  //  anoini++; chin ** anoini
    //anoaano = chin ** anoini
//alert("Previsão de quantidade de chinchilas ano a ano: "+anoaano)
//}

//alert("Previsão de quantidade de chinchilas: "+prev)