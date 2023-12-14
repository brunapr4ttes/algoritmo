let num, fatorial = 1

do{
    num = Number(prompt("Digite um número: "))

    if(isNaN(num || num <=0)){
        alert(`O caractere ${num} não é válido`)
    }
}while(isNaN(num) || num <= 0 )

document.write(`${num}! = `)

for(let i = 1; i <= num; i ++){
    fatorial = fatorial * 1
    if(i >= num){
        document.write(`${i}`)
    }else{
        document.write(`${i} .`)}
} document.write (` = ${fatorial}`)
