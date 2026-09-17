const produto = {
  nome: "Headset",
  preco: 200,
  desconto: 20
};

const {nome, preco, desconto} = produto;
let calculo = preco - desconto;
console.log(`Headset custava R$ ${preco} e agora custa R$ ${calculo}.`);