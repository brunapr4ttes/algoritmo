let promocao, preco, produto, tresprodutos

produto = prompt(`Produto: `)
preco = prompt(`Preço padrão do produto: `)

promocao = preco * 0.5
tresprodutos = (preco * 2) + promocao
  
    document.write(`50% de desconto na compra de três unidades de ${produto}! Preço padrão por unidade: R$${preco}. Preço com 50% de desconto (para um item) na compra de três unidades: R$${tresprodutos}.`);