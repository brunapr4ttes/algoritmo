const num = parseInt(prompt(`Digite um número inteiro: `))
let somadivisores = 0

for(let i = 1; i < num; i++){
    if(num % i === 0 ) {
        somadivisores += i;
    }
}
if (somadivisores === num){
    alert(`${num} é um número perfeito`)
}else{
    alert(`${num} não é um número perfeito`)
}