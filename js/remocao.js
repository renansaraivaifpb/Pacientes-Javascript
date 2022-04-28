var pacientes = document.querySelectorAll(".paciente")

/* selecionando todos os componentes que estão dentro da classe paciente, precisa iteragir em cada um deles para adicionar uma funcionalidade, um escutador de click. */


// há um problema: e as foram inseridas?
// pacientes.forEach(function(paciente){
//    paciente.addEventListener("dblclick",function(){
//        console.log("clicado duas vezes");
//        this.remove();
//        /* this significa: quem é o dono desse evento (li) de qual // paciente (indice)? */
//    }); 
// });


/* Para solucionar isso, utiliza-se classes cima das tr (tbody), por com a inserção do evento duplo click nela, as tagas que estão nivel a baixo tb a escutaram */
var tabela = document.querySelector("tbody")

tabela.addEventListener("dblclick", function(event){
    // não se usa o this nesse caso, pois estaria selecionado a tabela para remoção
    var tagFilho = event.target; // td
    var tagPai = event.target.parentNode; // tr
    tagPai.classList.add('fadeout')
    // esperar 500 milisegundos pra executar 
    setTimeout(function(){
        tagPai.remove();
    },500);
    
})
