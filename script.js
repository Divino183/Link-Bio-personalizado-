function abrirModal() {
  document.getElementById("myModal").style.display = "block";
}

function fecharModal() {
  document.getElementById("myModal").style.display = "none";
}

function adicionarCard() {
  // ... (código para adicionar o card, similar ao anterior) ...
  fecharModal(); // Fecha o modal após adicionar o card
}
