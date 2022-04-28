var filtrarFiltro = document.querySelector("input")




    
filtrarFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente")
    if(this.value.length > 0){
        pacientes.forEach(function(paciente){
            // paciente = pacientes[indice] indice++
            var nome = paciente.querySelector(".info-nome").textContent
            /* 
            ficar comparando pedacinho com pedacinho
            O primeiro parâmetro é o padrão (o texto da expressão regular, o que deve ser buscado) e o segundo parâmetro são uma ou mais flags (representando como queremos que a expressão regular busque).
            i = insensitivo
            */
            var expressao = new RegExp(filtrarFiltro.value, 'i')
            // test (executar comando e verificar se tem o parametro nome)
            if(!expressao.test(nome)){
                paciente.classList.add('esconder');
            }
            else{
                paciente.classList.remove('esconder');
            }    
        }); 
    }else{
        pacientes.forEach(function(paciente){
          paciente.classList.remove('esconder')  
        });
    }
    
});
