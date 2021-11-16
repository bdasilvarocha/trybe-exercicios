/* let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
// 1. Mensagem de boas vindas
console.log ("Bem vinda, " + info.personagem);

// 2. Adiciona nova chave 
info.recorrente = 'Sim';
console.log (info);

// 3. Mostrando as chaves do objeto
for (key in info){
    console.log (key);
};

//4. Mostrando os valores do objeto
for (key in info){
    console.log (info[key]);
};

// 5. Definindo novo objeto
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };
for (key in info && info2){
    if (key === 'recorrente' &&
        info[key] === info2[key]){
        console.log ("Ambos recorrentes");
    } else{
    console.log (info[key] + " e " + info2[key]); // Nao consegui entender direito como o if consegue retornar o que eh pedido
    };
}; */


let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  // 6. Imprimindo Livros Favoritos
  console.log ("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo + ".");

  // 7. Adiciona novo livro favorito
  leitor.livrosFavoritos.push (
    {   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      }
  );
console.log (leitor.livrosFavoritos);

// 8. Imprime quantidade de livros
console.log (leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos.");
