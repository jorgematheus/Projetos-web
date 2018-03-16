var time;
var timeleft = $("#time-left");
var lengthWord;
var phrase = $(".phrase");
$("#button-change-phrase").click(catchPhrase);
function catchPhrase()
{		
		$.ajax({
			url: 'http://localhost:3000/frases',
			type: 'GET',
			success: function(data){
					var randomNumber = Math.floor(Math.random() * data.length);
						  
		  			phrase.text(data[randomNumber].texto);
					time = (data[randomNumber].tempo);
					timeleft.text(time);
					refreshInitialTime(time);
					refreshLengthPhrase(phrase);
			}, 		
			beforeSend: function(){
				$("#spinner").toggle();
				phrase.toggle();
			},
			error: function(){
				mensagemErro();
			},
			complete: function(){
				$("#spinner").toggle();
				phrase.toggle();
			}
		});

}
$("#button-search-phrase").click(buscaFraseById);

function buscaFraseById()
{	
	var idFraseBuscada = $("#button-search-phrase-id").val();
	$.ajax({
		url: 'http://localhost:3000/frases',
		type: 'GET',
		data: {id:idFraseBuscada},
		beforeSend: function(){				
			if(idFraseBuscada == "" || idFraseBuscada >lengthWord)alert("Informe um valor válido para buscar!"); 
			else $("#spinner").toggle();		
		},
		success: function(data){				
			phrase.text(data.texto);
			timeleft.text(data.tempo);
			time = data.time;
			refreshInitialTime(time);
			refreshLengthPhrase(phrase);
		},
		error: function(){
			mensagemErro();
		},
		complete: function(){
			$("#spinner").hide();
		}
	});
}
function tamanhoFrase()
{ 		
     	 $.get("http://localhost:3000/frases",function(r){		 		  		 
		 lengthWord = r.length-1;
		 $("#idFraseBuscada").attr("max",lengthWord);
		 
	 });
}

function mensagemErro()
{
	$(".erro").stop().show("slow")
			
				setTimeout(function(){
					
					$(".erro").stop().fadeOut(1500);
					
				},1500);
				frase.show();
}
function AjaxFrase(){
	
	$.ajax({
		url: 'https://regres.in/api/users',
		type: 'GET',
		success: function(data){
			
			console.log(data);
		},
	error: function(err){
		
		console.log("errob ");
	}
	})
		
	
	
}

$(document).ready(function(){
			AjaxFrase();
})
	


	

