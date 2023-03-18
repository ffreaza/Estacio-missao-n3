import Livro from "../modelo/Livro";

const livros : Array<Livro> = [{
    codigo: 1,
    codEditora: 1,
    titulo: "Padrões de Projeto",
    resumo: "O livro apresenta 23 padrões de projeto para soluções reutilizáveis de software orientado a objetos. Os autores descrevem os padrões de projeto, que incluem padrões de criação, estruturais e comportamentais, e mostram como aplicá-los em diferentes situações. O livro é um clássico na área de programação e é muito utilizado por desenvolvedores em todo o mundo.",
    autores: ["Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides"]
},{
    codigo: 2,
    codEditora: 2,
    titulo: "Introdução à Programação com Python",
    resumo: "Este livro é uma introdução à programação em Python, uma linguagem de programação simples e fácil de aprender. Ele aborda desde os conceitos básicos de programação, como algoritmos e estruturas de dados, até tópicos mais avançados, como programação orientada a objetos, web scraping e processamento de dados. O livro é indicado para iniciantes na área de programação.",
    autores: ["Nilo Ney C. Menezes"]
},{
    codigo: 3,
    codEditora: 3,
    titulo: "Python Fluente",
    resumo: "é um livro avançado sobre a linguagem de programação Python. Ele aborda tópicos como funções, decoradores, classes, expressões regulares, entre outros, e ensina como escrever código Python claro, conciso e eficiente. O livro é indicado para desenvolvedores que desejam aprimorar seus conhecimentos em Python e escrever código mais profissional.",
    autores: ["Luciano Ramalho"]
}];

export default class ControleLivro {
    incluir(livro: Livro) {
        livro.codigo = livros.length > 0
            ? livros.at(-1)!.codigo + 1
            : 1;
        livros.push(livro);
    }

    excluir(codigo: number) {
        const index = livros.findIndex(livro => livro.codigo == codigo);
        livros.splice(index, 1);
    }

    obterLivros() {
        return livros;
    }
}