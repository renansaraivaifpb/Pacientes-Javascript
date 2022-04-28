var titulo = document.querySelector("#titulo");
titulo.textContent = "Renan Saraiva dos Santos";


var pacientes = document.querySelectorAll(".paciente");


for(var indice = 0; indice < pacientes.length; indice++){
  var paciente = pacientes[indice];
    
    
  var nome = paciente.querySelector(".info-nome").textContent;
  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;
  var gordura = paciente.querySelector(".info-gordura").textContent;
  
  var validacao = validaPaciente(nome, peso, altura, gordura)
  
  if(validacao != ''){
    peso.textContent = validacao[0];
    paciente.classList.add('paciente-invalido');
  }
  if(validacao != ''){
    altura.textContent = validacao[1];
    paciente.classList.add('paciente-invalido');
  }
  if(validacao == ''){
      
    /* trocando o texto da tdIMC */
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = calcularImc(peso,altura); /* números inteiros arredondados */
  }
}


 
function validaPaciente(nome, peso, altura, gordura){
    var erros = [];
    if(nome.length > 2){
       erros;
    }else{
       erros.push('Nome inválido');
    }
    if(!!+peso == true && (peso < 1000 && peso > 0)){
       erros;
    }else{
       erros.push('Peso inválida');
    }
    if(!!+altura == true && (altura < 3 && altura > 0)){
       erros;
    }else{
       erros.push('Altura inválida');
    }
    if(!!+gordura == true && (gordura < 1000 && gordura > 0)){
       erros;
       console.log(gordura)
    }else{
       erros.push('Gordura inválida');
    }
    return erros;
}
   

function calcularImc(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}