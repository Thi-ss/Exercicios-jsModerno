const produto = {
  nome: "Mouse",
  preco: 80
};
const {nome, preco} = produto;

const mostrarProduto = (nome, preco) => {
    console.log (`Produto: ${nome} - Preço: R$ ${preco}`)
};

mostrarProduto(nome, preco);