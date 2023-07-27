let promocao, preco, cents, total, medicamento, valorFinal

medicamento = prompt("Qual o medicamento? ")
preco = prompt("Qual o preço do medicamento? ")

  total = preco * 2;
  cents = total % 1;
  promocao = Math.floor(cents * 100) / 100;
  valorFinal = total - cents;

  document.write(`A promoção para duas unidades de ${medicamento} é de R$${promocao.toFixed(2)} e o valor final é de R$${valorFinal}`);
  