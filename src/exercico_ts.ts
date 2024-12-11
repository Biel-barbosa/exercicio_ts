function multiplicar(a: number, b: number): number {
    return a * b;
}

function saudacao(nome: string): string {
    return "Olá " + nome;
}

let resultadoMultiplicacao = multiplicar(5, 3);
console.log(resultadoMultiplicacao);

let mensagemSaudacao = saudacao("Gabriel");
console.log(mensagemSaudacao);
