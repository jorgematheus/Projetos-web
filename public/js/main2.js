$(document).ready( () => {
    //pegarCampus();
});

/*let pegarCampus = () => {
  $.ajax({
  url: 'http://localhost:4500/faculdades',
  type: 'GET',  
  beforeSend: function(){
    
  },
  success: function(data){
        let len = data[0].UNIP.campus.length;       
        for(let i = 0; i<len; i++){
          
          setTimeout(function(){
              let content = "<div class='conteudo'> <h3> "+data[0].UNIP.campus[i].nome+"</h3>"+
                             "<ul>"  +criar(data[0].UNIP.campus[i].cursos.length, data[0].UNIP.campus[i].cursos)+ "</ul>"
                           "</div>"
              console.log(data[0].UNIP.campus[i].cursos.length)
              $('body').append(content)
         },2000)        
      }
    }      
  }); 
}

$('#btn').click( ()=> {
    criar(3);

})
let criar = (quantidade,conteudo) => {
    for(let i = 0; i < quantidade; i++){
      let cria = $('<li>'); 
      cria.append(conteudo);
      $('body').append(cria)
          
    }


}*/





document.querySelector('#btn').addEventListener('click', () =>{

  $.ajax({
  url: 'http://localhost:4500/faculdades',
  type: 'GET',  
  beforeSend: function(){

  },
  success: function(data){
        let tamanhoCampus = data.length;        
        for(let i = 0; i<tamanhoCampus; i++){

            let title = $('<h3>'), lista = $('<ul>');
              $(title).append(data[i].nome);           
              $(lista).append(title);             
                for(let j = 0; j < data[i].cursos.length; j++){
                    
                    setTimeout(function(){
                        let linha = $('<li>');                      
                          $(linha).append(data[i].cursos[j]);                      
                          $(lista).append(linha);                                                  
                          $('body').append(conteudo);                     
                    },2000)
                }
            let conteudo = $('<div>').append(lista);
         }

     }
      //console.log(data[0].UNIP.campus[3].nome)}
  });

});

$('#enviar').click( () => {

  $.ajax({
    url: 'http://localhost:4500/faculdades',
    type: 'POST',
    data: {
            id:20,
            nome: 'JORGE TESTE'           
    },
    success: () =>  {
        console.log('sucesso"');
    }
  })

  
});

let post = () => {
  let _obj = [];
    let faculdade = {
        id:20,
        nome: 'JORGE TESTE',
        cursos: ['ABC', 'DEF', 'GHIJ'],
        periodos: ['MATUTINO', 'NOTURNO'],
        mensalidades: [400,1000,2100,8540]
    }
    _obj.push(faculdade);
    let dado = {_obj}

    //$.get("http://localhost:4500/faculdades",faculdade);
    console.log('enviado..')
}


$('#pesquisar').blur( ()=> {
  let frase = $('#pesquisar').val();
  let ct = 'campus.id'
    $.ajax({
            url: 'http://localhost:4500/faculdades',
            type: 'GET',
            data: {id: frase},
            beforeSend:  () => {
                 if(frase <1 ) {
                  alert('Digite um valor !')
                 }
            },
            success: (data) => {
              alert(data.nome)
            }
    });
});
