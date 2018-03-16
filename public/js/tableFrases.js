function catchPhraseAppendTable(){

$.ajax({
	url: 'http://localhost:3000/frases',
	type: 'GET',
	beforeSend: function(){
		$("table-words").hide();
	},
	success: function(data){
				data.forEach(function(i,returnData,linha){
						returnData = {_id: i._id, frase: i.texto, _time: i.tempo}; 					
						 linha = montaLinha(returnData._id,returnData.frase,returnData._time);
						$("#table-words tbody").append(linha);
				});     
				
	},
	error: function(){
		alert("algo de errado");
	},
	complete: function(){
		$("table-words").show();
	}	
});
}

function montaLinha(id,frase,time){

	var monta = {
		linha: $("<tr>"),		
		_id: $("<td>").text(id),
		frase: $("<td>").text(frase),
		_time: $("<td>").text(time)
	}
			monta.linha.append(monta._id);
			monta.linha.append(monta.frase);
			monta.linha.append(monta._time);

return monta.linha;

}
$("#button-show-phrase").click(function(){

	var tablePhrases = $("#section-table-words");

		
		if(tablePhrases.hasClass('section-table-words')){

			tablePhrases.fadeIn(800);
			setTimeout(function(){
				tablePhrases.removeClass('section-table-words');
			},800)

		} 
	
		else {
			tablePhrases.fadeOut(800);

			setTimeout(function(){
				tablePhrases.addClass('section-table-words');
			},800)
			
			}
		

		console.log("click");
	

	

});