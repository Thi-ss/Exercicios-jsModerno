const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2024
};

const {marca, modelo, ano} = carro;

const info = (marca, ano, modelo) =>{
    console.log(`${marca} ${modelo} - Ano ${ano}`);
};

info(marca, ano, modelo);
