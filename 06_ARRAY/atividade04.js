    //RESOLUÇÃO INDIVIDUAL:

// let v1 = []
// let v2 = []

// v1.concat(v2)
// for(let i = 0; i <= 9; i++){
//     v1[i] = Number(prompt("Digite 9 números para o vetor 1"))
   
// }document.write(`Vetor 1 = ${v1} <br>`)

// for(let j = 0; j <= 9; j++){
//     v2[j] = Number(prompt("Digite mais 9 números para o vetor 2"))
// }document.write(`Vetor 2 = ${v2} <br>`)


// let v3 = []
// let i = 0 , j = 0
// for(let vL3 = 0; vL3 < 20; vL3++){
//     if(vL3%2==0){
//         v3[vL3] = v1[i];
//         i++;
//     }else{
//         v3[vL3] = v2[j];
//         j++;
//     }

// }document.write(`Vetor 3 = ${v3}`)

    //RESOLUÇÃO PROFESSOR

//vetor 1 -> 1, 3, 5
//vetor 2 -> 4, 9, 15
//vetor 1 -> 1, 4, 3, 9, 5, 15
let vet1 = [], vet2 = [], vet3 = []
let j = 0

// adicionar os elementos nos vetores
for (let i = 0; i < 3; i++) {
        //0 -> 2
    vet1[i] = Number(prompt(`Digite o valor para o índice`+i+`a`))
        //0 -> 2
    vet3[j] = vet1[i]
    j = j + 1

        //0 -> 7
    vet2[i] = Number(prompt(`Digite o valor para o índice ${i}`))
        //0 -> 7
    vet3[j] = vet2[i]
    j++
}
document.write(`Vetor 1 ${vet1} <br>`)
document.write(`Vetor 2 ${vet2} <br>`)
//mostrar o vetor resultante
for (let i = 0; i < vet3.length; i++) {
    
    
}
document.write(`Vetor 3 ${vet3} <br>`)
//for(){}