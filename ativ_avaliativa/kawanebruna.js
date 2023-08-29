let operario, pecas, sexo, aumentosalario, salariofixo = 1320, salario = 1320, cont, totalpecas = 0, pecasm = 0, pecasf = 0, folhapagamento = 0

for (cont = 1; cont <= 3; cont++) {

operario = prompt(`Digite o número identificador do operário: `)
pecas = Number(prompt(`Digite a quantidade de peças fabricadas por mês: `))
sexo = Number(prompt(`Digite seu gênero, (1) = feminino, (2) = masculino`))

if (isNaN(pecas)) {
    alert(`Dados Inválidos, por favor, insira dados válidos!`)
}
    
//classe 1
if (pecas < 20) {

salario = salario
    document.write(`Operário ${operario} <br> Classe 1 <br> Salário = ${salario} <br>`)

 //classe 2   
}else if (pecas >= 20 && pecas <= 30) {

aumentosalario = (pecas - 20) * 39.6
salario = salariofixo + aumentosalario
    document.write(`Operário ${operario} <br> Classe 2 <br> Salário = ${salario} <br>`)
    
//classe 3
}else if (pecas > 30) {

    aumentosalario = (pecas - 30) * 66
    salario = salariofixo + aumentosalario
    document.write(`Operário ${operario} <br> Classe 3 <br> Salário = ${salario} <br>`)
        }if (sexo === 1) {
            document.write(`Sexo feminino <br> <br>`)
        }else if (sexo === 2) {
            document.write(`Sexo masculino <br> <br>`)
        }
    }
folhapagamento = folhapagamento + salario
document.write(`Folha de pagamento = ${folhapagamento}`)
if (isNaN(folhapagamento)) {
    alert(`Dados Inválidos, por favor, insira dados válidos!`)
}