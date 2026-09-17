const jogo = {
    titulo: `Minecraft`,
    genero: `Sandbox`,
    preco: `R$ 99`

}

const {titulo, genero, preco} = jogo;

const exibirJogo = (titulo, genero, preco) =>{
    console.log(`${titulo} é um jogo do gênero ${genero} que custa ${preco}.`);
}

exibirJogo(titulo, genero, preco);