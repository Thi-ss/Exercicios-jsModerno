const aluno = {
  nome: "Lucas",
  nota1: 8,
  nota2: 6
};

const {nome, nota1, nota2} = aluno;

const calcularMedia = (nome, nota1, nota2) =>{
    let media = (nota1 + nota2)/2
    console.log(`${nome} ficou com a média ${media}.`);
}

calcularMedia(nome, nota1, nota2);