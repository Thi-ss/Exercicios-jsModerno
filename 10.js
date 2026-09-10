const filme = {
  titulo: "Interestelar",
  ano: 2014,
  diretor: "Christopher Nolan"
};
const {titulo, ano, diretor} = filme;

const info = (titulo, ano, diretor) =>{
    console.log(`${titulo} foi lançado em ${ano} e dirigido por ${diretor}.`)
};

info(titulo, ano, diretor);