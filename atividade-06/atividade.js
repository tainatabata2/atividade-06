let nome = "Ana";
let idade = 17;
let curso = "Desenvolvimento de Sistemas";
let mensalidade = 500;
let vagas = 10;
let possuiDesconto = true;

console.log("===== DADOS DO CANDIDATO =====");
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Curso:", curso);
console.log("Mensalidade: R$", mensalidade);
console.log("Vagas disponíveis:", vagas);
console.log("Possui desconto:", possuiDesconto);


function verificarIdade(idade) {
    if (idade < 16) {
        return "Inscrição não permitida";
    } else if (idade <= 17) {
        return "Necessita de autorização do responsável";
    } else {
        return "Inscrição permitida";
    }
}

console.log("===== VERIFICAÇÃO DA IDADE =====");
console.log(verificarIdade(idade));


function verificarVagas(vagas) {
    if (vagas > 0) {
        return "Existem vagas disponíveis.";
    } else {
        return "Não existem vagas disponíveis.";
    }
}

console.log("===== VERIFICAÇÃO DE VAGAS =====");
console.log(verificarVagas(vagas));


function calcularDesconto(mensalidade, possuiDesconto) {
    if (possuiDesconto == true) {
        return mensalidade - (mensalidade * 15 / 100);
    } else {
        return mensalidade;
    }
}

console.log("===== CÁLCULO DE DESCONTO =====");

let valorFinal = calcularDesconto(mensalidade, possuiDesconto);

console.log("Valor original: R$", mensalidade);
console.log("Valor final: R$", valorFinal);

function classificarMensalidade(mensalidade) {
    if (mensalidade <= 300) {
        return "Curso econômico";
    } else if (mensalidade <= 600) {
        return "Curso intermediário";
    } else {
        return "Curso premium";
    }
}

console.log("===== CLASSIFICAÇÃO DA MENSALIDADE =====");
console.log(classificarMensalidade(mensalidade));


console.log("===== FIM DO PROGRAMA =====");