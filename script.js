function comprarIngresso(evento) {
    document.getElementById("pagamento-modal").style.display = "block";
    document.getElementById("eventoSelecionado").textContent = evento;
}

function abrirCadastro() {
    document.getElementById("cadastro-modal").style.display = "block";
}

function fecharCadastro() {
    document.getElementById("cadastro-modal").style.display = "none";
}

function cadastrarCliente() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    
    if (nome && email) {
        alert(`Cadastro realizado com sucesso! Bem-vindo, ${nome}!`);
        fecharCadastro();
        
    } else {
        alert("Preencha todos os campos!");
    }
}

function mudarAba(aba) {
    let abas = document.querySelectorAll(".aba-eventos");
    abas.forEach(abaElemento => {
        abaElemento.style.display = "none";
    });
    document.getElementById(aba).style.display = "block";
}

function fecharPagamento() {
    document.getElementById("pagamento-modal").style.display = "none";
}

function finalizarCompra() {
    const nome = document.getElementById("nome-pagamento").value;
    const cpf = document.getElementById("cpf-pagamento").value;
    const forma = document.getElementById("forma-pagamento").value;

    if (nome && cpf && forma) {
        alert(`Compra finalizada com sucesso para ${nome}!`);
        fecharPagamento();
    } else {
        alert("Preencha todos os campos antes de finalizar a compra.");
    }
}
