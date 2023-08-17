let numero

numero = Number(prompt(`Digite um número e veja a tabuada: `))

for(let tab = 1; tab <= 10; tab++){
 let resultado = numero * tab 
 document.write(numero+" x "+tab+" = "+resultado) 
}