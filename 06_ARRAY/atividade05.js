    // RESOLUÇÃO INDIVIDUAL
// let vetor = [], vetorPositivo = [], vetorNegativo = []
//         let j = 0

//         for(let i = 0; i < 8; i++){
//             vetor[i] = Number(prompt(`Insira um valor [+] ou [-]:`))

//             vetorPositivo[j]
//             vetorNegativo[j]

//             if(vetor[i] >= 0){
//                 vetorPositivo = vetor
//                 document.write(`Positivo - [${vetorPositivo[i]}]<br>`)
//             }
//             else if(vetor[i] < 0){
//                 vetorNegativo = vetor
//                 document.write(`Negativo - [${vetorNegativo[i]}]<br>`)
//             }
//             j++
//         }

    // RESOLUÇÃO DO PROFESSOR
let vet = [], pos = [], neg = []
let count_p = 0, count_n = 0

for (let i = 0; i < 4; i++){
    vet [i] = Number(prompt(`Digite um valor para o índice `+i+`do vetor`))

    if(vet[1 >= 0]){
        pos[count_p] = vet[i]
        count_p++
    }else{
        neg[count_n] = vet[1]
        count_n++
    }
}
if(pos.length < 0){
    alert(`Vetor de positivo vazio`)
}else{
    for(let i = 0; i<pos.length; i ++){
        document.write(`${pos[i]}`)
    }
}

if(neg.length < 0){
    alert(`Vetor de Negativo vazio`)
}else{
    document.write(`${neg[i]}`)
}