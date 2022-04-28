var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
  /* 
  Por padrão a página é recarregada (<form>), logo devemos impedir que isto ocorra.
  Adicione o parâmetro event na função anônima e dentro dela chame o event.preventDefault()
  */
    
  event.preventDefault();
  /* acessando o formulario */
  var form = document.querySelector("#form-adiciona");
    
  var paciente = obtemPacienteDoFormulario(form);
    
  

  adicionaPacientenaTabela(paciente)
  
  var validacaoDepacienteInserido = validaPaciente(paciente.nome,paciente.peso, paciente.altura, paciente.gordura)
  var ul = document.querySelector("#mensagem-erro");
  ul.innerHTML = '';
  if(validacaoDepacienteInserido != ''){
      validacaoDepacienteInserido.forEach(function(erro){
          var li = document.createElement("li")
          li.textContent = erro
          ul.appendChild(li)
      });
      return;
  }    
  
  form.reset()
});



