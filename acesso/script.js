// script.js

function forgotPassword() {
    // Implemente aqui a lógica para redefinição de senha
    alert("Funcionalidade de 'esqueceu a senha' ainda não implementada.");
  }

    // Função para obter a saudação com base no horário
function obterSaudacao() {
      const agora = new Date();
      const hora = agora.getHours();

      if (hora >= 0 && hora < 12) {
        return "Bom dia";
      } else if (hora >= 12 && hora < 18) {
        return "Boa tarde";
      } else {
        return "Boa noite";
      }
    }

    // Função para atualizar a saudação e o nome do usuário
    function atualizarSaudacao() {
      const saudacao = obterSaudacao();
      const nomeUsuario = "Usuário"; // Substitua pelo nome do usuário real

      // Atualiza o título da página
      document.getElementById("mensagemSaudacao").innerText = `${saudacao}, ${nomeUsuario}`;
    }

    // Chama a função para atualizar a saudação quando a página carrega
    window.onload = function () {
      atualizarSaudacao();
    };

    // Restante do seu script.js
    document.getElementById('cadastroAlunoForm').addEventListener('submit', function (event) {
      event.preventDefault();
      const tipoDocumentoSelecionado = document.getElementById('tipoDocumento').value;
      redirecionarParaDocumento(tipoDocumentoSelecionado);
    });

    function redirecionarParaDocumento(tipoDocumento) {
      // Adicione lógica para redirecionar com base no tipo de documento selecionado
      switch (tipoDocumento) {
        case 'historicoEscolar':
          window.location.href = 'historico-escolar.html'; // Substitua pelo nome da página correspondente
          break;
        case 'atestado':
          window.location.href = 'atestado.html'; // Substitua pelo nome da página correspondente
          break;
        case 'fichaMatricula':
          window.location.href = 'ficha-matricula.html'; // Substitua pelo nome da página correspondente
          break;
        case 'fichaSaude':
          window.location.href = 'ficha-saude.html'; // Substitua pelo nome da página correspondente
          break;
        case 'relatoriosDesenvolvimento':
          window.location.href = 'relatorios-desenvolvimento.html'; // Substitua pelo nome da página correspondente
          break;
        default:
          alert('Tipo de documento não reconhecido.');
      }
    }

