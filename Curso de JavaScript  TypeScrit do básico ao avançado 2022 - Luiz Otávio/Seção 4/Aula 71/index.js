//Escopo léxico é simplesmente a maneira que a função usa para resolver nomes de variáveis em funções aninhadas... As funções mais internas, contém também o escopo das funções mais externas...


// Escopo global
function a(msg) {
    // Escopo léxico de a é acessível em b
    return function b(algoEmB) {
      // Escopo léxico de b e a são acessíveis em c
      return function c(algoEmC) {
        console.log(msg, algoEmB, algoEmC);
      };
    };
  }

  //Se nomes de variáveis colidirem, o escopo mais interno é resolvido como resolução:

function falaNome(nome) {
    // Veja que nome colide com nome
    // Quem será usado é nome no escopo interno
    return function (nome) {
      // Esse nome será usado
      console.log(nome);
    };
  }
   
  falaNome('Luiz')('Ana Sofia'); // Ana Sofia


