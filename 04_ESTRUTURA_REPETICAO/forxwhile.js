// let numero = 1

// while(numero != 8){
//     document.write (`Contador = ${numero}`)
//     numero = Math.floor(Math.random() * 9)
// }
// document.write(`Contador = ${numero}`)

// for (let i = 1; i<=10; i++){
//     console.log(`Valor de i: ${i}`)
// }
// console.log

let numero = 1

        while(numero != 8){
            document.write(`${numero} \n`)
            console.log(`Contador = ${numero}`)
            numero = Math.floor(Math.random(numero) * 9) // por 9 pois ele vai do 0 até o 9, se fosse por 8 seria do 0 até o 7
        }
        document.write(`Contador = ${numero}`)

        for(let i = 1; 1 <= 10; i++){
            console.log(`Valor de i: ${i}`)
        }
        console.log(`Valr de i:${i} para sair do laço`)