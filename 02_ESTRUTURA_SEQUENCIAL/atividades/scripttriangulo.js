let lado1, lado2, lado3, soma

lado1 = prompt(`Lado 1: `)
lado2 = prompt(`Lado 2: `)
lado3 = prompt(`Lado 3: `)

if (lado1 > (lado2 + lado3)){
    alert(`Isto não é um triângulo!`)

}else if (lado2 > (lado1 + lado3)){
    alert(`Isto não é um triângulo!`)

}else if (lado3 > (lado1 + lado2)){
    alert(`Isto não é um triângulo!`)

}else if (lado1 == lado2 && lado2 == lado3) {
    alert("Triângulo equilátero")

}else if (lado1 == lado2 && lado2 !== lado3){
    alert(`Triângulo Isósceles`)

}else if (lado1 !== lado2 && lado2 == lado3){
    alert(`Triângulo Isósceles`)

}else if (lado2 == lado3 && lado3 !== lado1){
    alert(`Triângulo Isósceles`)

}else if (lado1 != lado2 && lado1 !== lado3 && lado2 !== lado3){
    alert(`Triângulo Escaleno`)
}
