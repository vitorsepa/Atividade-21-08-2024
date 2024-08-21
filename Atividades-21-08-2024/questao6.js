let pessoa = {
    nome: "Vitor",
    idade: 30,
    profissao: "Dev",
    endereco: {
        rua: "Distrito Industrial",
        cidade: "São José",
        estado: "SC"
    },
    apresentacao: function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, sou ${this.profissao} e moro em ${this.endereco.cidade}, ${this.endereco.estado}.`;
    }
};

console.log("Cidade:", pessoa.endereco.cidade); // São José

pessoa.profissao = "Programador Back-End";
console.log("Objeto atualizado:", pessoa);

pessoa.telefone = "(48) 1234-5678";
console.log("Objeto atualizado com telefone:", pessoa);