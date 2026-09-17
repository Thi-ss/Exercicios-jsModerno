const calcularDesconto = (preco, desconto) =>{
    let calculo = preco * desconto/100;
    let final = preco - calculo
    console.log(`O preço final é ${final}`);
}
calcularDesconto(200, 20);