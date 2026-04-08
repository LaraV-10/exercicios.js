// ========================================
// Aula 05 — Fundamentos de JavaScript
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula05
// Não mexa no arquivo index.test.js.

// Exercício 1 — classificarIdade
export function classificarIdade(idade) {
  if (idade < 12){
    return "Criança";
  }else if (12 <= idade <= 17){
    return "Adolescente";
  }else {
    return "Adulto";
  }
}

// Exercício 2 — calcularDesconto
export function calcularDesconto(preco, percentual) {
  return preco - (preco * percentual / 100);
}

// Exercício 3 — verificarAprovacao
export function verificarAprovacao(nota) {
  if (nota >= 60){
    return "Aprovado";
  }
  else if(60 >nota >= 40){
    return "Recuperação";
  }
  else{
    return "Reprovado";
  }
}

// Exercício 4 — somarPares
export function somarPares(numeros) {
  let soma = 0;
  for (const numeros of numeros) {
  if (numeros % 2 === 0){
     soma += numeros;
  }
  return soma;
}

// Exercício 5 — contarLetra
export function contarLetra(texto, letra) {
  let contador = 0;
  for (const caractere of texto) {
  if (caractere === letra){
    return contador++;
  }
  }
  return contador;
}
