const pedido = {
  produto: "Teclado Mecânico",
  preco: 250,
  quantidade: 2
};

const {produto, preco, quantidade} = pedido;

const calcularTotal = (produto, preco, quantidade) =>{
    let total = preco * quantidade
    
    console.log(`
        Produto: ${produto}
        Preco: ${preco}
        Quantidade: ${quantidade}
        Total: ${total}
        `);
}

calcularTotal(produto, preco, quantidade);