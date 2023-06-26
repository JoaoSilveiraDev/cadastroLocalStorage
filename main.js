const cliente = {
    nome: "",
    dataNascimento: "",
    profissao: "",
    cidadeNascimento: "",
    login: "",
    senha: ""
}
document.getElementById("botao").addEventListener("click", ()=>{

    cliente.nome = document.getElementById("nome").value
    cliente.dataNascimento = document.getElementById("dataNascimento").value
    cliente.profissao = document.getElementById("profissao").value
    cliente.cidadeNascimento = document.getElementById("cidadeNascimento").value
    cliente.login = document.getElementById("login").value
    cliente.senha = document.getElementById("senha").value
    localStorage.setItem(0, cliente.nome)
    localStorage.setItem(1, cliente.dataNascimento)
    localStorage.setItem(2, cliente.profissao)
    localStorage.setItem(3, cliente.cidadeNascimento)
    localStorage.setItem(4, cliente.login)
    localStorage.setItem(5, cliente.senha)
})