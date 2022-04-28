/* Todas funções do FORM */

  /* capturar input a partir do Name do formulario (objeto) */
  function obtemPacienteDoFormulario(form){
    var paciente ={
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente
  }
  
  /* criando linha */
  var pacienteTr = document.createElement("tr");
  /* criando colunas */
  function montaTd(dado, classe){
      var td = document.createElement('td');
      td.classList.add(classe);
      td.textContent = dado;
      return td;
  }

  function montaTr(paciente){
      var pacienteTr = document.createElement('Tr')
      pacienteTr.classList.add('paciente')
      /* inserindo coluna na linha */
      pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
      pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
      pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
      pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
      pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));
      return pacienteTr;
  }
   function adicionaPacientenaTabela(paciente){
        /* acessando a tabela body */
        var pacienteTr = montaTr(paciente);
        /* inserindo a linha na tabela body */
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
   }