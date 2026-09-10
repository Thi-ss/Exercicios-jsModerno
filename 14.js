const pessoa = {
  nome: "Mariana",
  idade: 25,
  profissao: "Desenvolvedora"
};
const {nome, idade, profissao} = pessoa

const apresentarPessoa = (nome, profissao, idade) =>{
    console.log(`${nome} tem ${idade} anos e trabalha como ${profissao}.`)
}

apresentarPessoa(nome, profissao, idade);

