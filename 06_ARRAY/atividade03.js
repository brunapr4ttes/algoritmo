let lista = []
alert("Digite 0 quando finalizar")

do{
    lista = prompt("Digite os produtos da sua lista")
    if(lista == 0){
        let sair = confirm("Deseja finalizar?")
        if(sair){
            break
        }else{
            continue
        }
    }
    document.write(`${lista} <br>`)

}while(true)

