let diasdasemana = ["Domingo", "Segunda", "Terça", "Quarta"]

//diasdasemana [0] = "Domingo"
//diasdasemana [1] = "Segunda"
//diasdasemana [2] = "Terça"
//diasdasemana [3] = "Quarta"
//console.log(diasdasemana)

//DUAS MANEIRAS DE ATRIBUIR VALORES:

//MANEIRA 1:
//let numeros = [42]

//MANEIRA 2:
// let numeros = []         // O espaço vazio do Arrray ocupa espaço, ou seja, ele é contabilizado no leitor.
// numeros [0] = 42
// numeros [4] = 89
// numeros [2] = 21
// numeros [1] = 56
// console.log(numeros[1]+numeros[2]+numeros[0]+numeros[4])

//UTILIZANDO ESTRUTURA DE REPETIÇÃO
// let numeros = []
// for(let i = 0; i < 12; i++){
//     numeros[i] = Number(prompt(`Digite um valor para o índice ${i} do vetor`))
// }
// console.log(numeros)

//LISTAR OS VALORES DO ARRAY
// for(let i = 0; i <12; i++){
//     console.log(numeros[i]+"\n")
// }

let nums = [3,6,5,2,4,1]

console.log(nums.length)

for(let i = 0; i < 8; i++){
    console.log(nums[i])
}