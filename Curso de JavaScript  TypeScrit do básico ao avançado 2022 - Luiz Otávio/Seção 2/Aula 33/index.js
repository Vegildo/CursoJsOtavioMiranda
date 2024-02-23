/**
 * Primitivos (imutáveis) - string, number, coolean, undefined, null (bignt, symbol) - Valores copiados
 *
 *
 * let a = 'A';
 * let b = a; // Cópia
 * console.log(a, b)
 *
 * Estamos copiando o valor de a na variável b, Ou seja, ambas sao independentes
 */

/**
 * Referência (mutável) - array, object, function
 *
 * let a = [1, 2, 3];
 * let b = a;
 * a.push(4);
 * console.log(a, b); 
 * 
 * Não estamos copiando e sim criando variaveis q a ponta para endereços
 na memória.
 */

/**
 * OBS:
 *
 * let a = [1, 2, 3];
 * let b = [...a];
 * a.push(4);
 * console.log(a, b); 
 * 
 * Nesse caso o valor do endereço de a foi copiado/puxado para b 
 */

/**
 * 
 * const a= {
 *  nome: "leo",
 *  sobrenome: 'Braga',
 * };
 * const b = a;
 * 
 * a.nome = 'Novo';
 * console.log(b); 
 * 
 * Nesse caso objeto tb nao é um dado primitivo e entao ele quardo o endereco e dessa forma acontece o msm q no caso do array, as duas variaveis estarão apontadas pro msm local
 * 
 * const a= {
 *  nome: "leo",
 *  sobrenome: 'Braga',
 * };
 * const b = {...a};
 * 
 * a.nome = 'Novo';
 * console.log(b); 
 * 
 * Usando spread acontece o msm q usado spread em array, coppiaremos o valor q esta guardado na memória e assim n teremos relaçoes entre as variáveis
 */
