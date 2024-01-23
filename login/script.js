function forgotPassword() {
  // Implemente aqui a lógica para redefinição de senha
  alert("Funcionalidade de esqueceu a senha ainda não implementada.");
}

document.addEventListener("DOMContentLoaded", function() {
  // Aguarde o DOM estar completamente carregado

  // Seletor do formulário
  var form = document.querySelector('form');

  // Adicione um ouvinte de evento para o evento de envio do formulário
  form.addEventListener('submit', function(event) {
    // Previna o comportamento padrão do formulário (não recarregar a página)
    event.preventDefault();

    // Redirecione para a nova página (substitua "novaPagina.html" pelo nome do seu arquivo HTML)
    window.location.href = '../acesso/index.html';
  });
});
