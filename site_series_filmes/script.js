// === Função para validar o formulário ===
function validarFormulario(event) {
    event.preventDefault(); // Impede envio automático do formulário

    let nome = document.getElementById('nome').value.trim();
    let titulo = document.getElementById('titulo').value.trim();
    let nota = document.getElementById('nota').value.trim();
    let data = document.getElementById('datetime').value.trim();

    if (nome === "" || titulo === "" || nota === "" || data === "") {
        mostrarMensagem("⚠️ Preencha todos os campos obrigatórios!", "erro");
        return false;
    }

    mostrarMensagem("✅ Formulário enviado com sucesso!", "sucesso");
    document.getElementById("formAvaliacao").reset();
    return true;
}

// === Função para mostrar mensagem ===
function mostrarMensagem(texto, tipo) {
    let divMensagem = document.getElementById('mensagem');
    divMensagem.textContent = texto;

    if (tipo === "erro") {
        divMensagem.style.color = "red";
    } else {
        divMensagem.style.color = "green";
    }
}

// === Função para alterar cor de fundo ===
function alterarCorDeFundo() {
    const cores = ["#f2f2f2", "#d6eaf8", "#f9e79f", "#d5f5e3", "#f5b7b1"];
    const corAtual = document.body.style.backgroundColor;
    let novaCor = cores[Math.floor(Math.random() * cores.length)];

    // Evita repetir a mesma cor
    while (novaCor === corAtual) {
        novaCor = cores[Math.floor(Math.random() * cores.length)];
    }

    document.body.style.backgroundColor = novaCor;
}

// === Eventos ===
document.getElementById("formAvaliacao").addEventListener("submit", validarFormulario);
document.getElementById("botaoCor").addEventListener("click", alterarCorDeFundo);

function calcularMedia() {
    let totalNotas = 0;
    let contador = 0;

    // Pega as notas das séries
    const tabelaSeries = document.querySelectorAll("#tabelaSeries tbody tr");
    tabelaSeries.forEach(tr => {
        const nota = parseFloat(tr.cells[3].textContent);
        if (!isNaN(nota)) {
            totalNotas += nota;
            contador++;
        }
    });

    // Pega as notas dos filmes
    const tabelaFilmes = document.querySelectorAll("#tabelaFilmes tbody tr");
    tabelaFilmes.forEach(tr => {
        const nota = parseFloat(tr.cells[3].textContent);
        if (!isNaN(nota)) {
            totalNotas += nota;
            contador++;
        }
    });

    const media = (totalNotas / contador).toFixed(2);
    alert("A média das notas de séries e filmes é: " + media);
}

// Mostra data e hora no rodapé
function mostrarDataAtual() {
    const data = new Date();
    const opcoes = { 
        weekday: 'long', 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    document.getElementById("dataAtual").textContent = 
        "🕒 " + data.toLocaleDateString("pt-BR", opcoes);
}

// Atualiza a cada segundo
setInterval(mostrarDataAtual, 1000);
mostrarDataAtual();
