//variáveis
var typingField = $(".typing-field");
var time = $("#time-left").text();
var buttonRestart = $("#button-restart");

function refreshLengthPhrase(phrase)
{
         phrase = $(".phrase").text();
        var numberWords = phrase.split(" ").length;
        $("#number-words").text(numberWords);
	
		var numberCharacter = phrase.split("").length;
		$("#number-characters").text(numberCharacter);    
}
function refreshCounter()
{
    	typingField.on("input", function(){
		         
                    var counterCharacter = $(this).val().split("").length;

                    $("#counter-character").text(counterCharacter);

                    var counterPhrase = $(this).val().split(/\S+/).length - 1;

                    $("#counter-words").text(counterPhrase);
		});
}
function refreshInitialTime(time) {
    $("#time-left").text(time);
}
function startTime(){                 
            typingField.one("focus", function(){				
				$("#botao-troca").attr("disabled",true);
                $("#botao-busca").attr("disabled",true);
				var time = $("#time-left");
				var timeLeft = time.text();                   
                buttonRestart.attr("disabled",true);
                var stopwatch = setInterval(function(){
                    timeLeft--;
                    time.text(timeLeft);
                       if(timeLeft < 1){
                            clearInterval(stopwatch);  
                            classOn(time,"tempoExcedido");
                            gameOver();										
                       }                                        
                },1000);

            });
        if(buttonRestart.click) {
			$(buttonRestart).attr("disabled",true);
			$("#button-search-phrase").attr("disabled",false);
            $("#button-change-phrase").attr("disabled",false);
		}
}

function comparePhrases(){
              
        typingField.on("input",function(){
                     
                var word = $(".phrase").text();
                var compare = word.substr(0,this.value.length); /* variável que irá comparar o valor que está sendo digitado com o valor selecionado na variável "frase"*/

						var truth = this.value == compare;
                        
                        $(this).toggleClass("bordaVerde",truth);
                        $(this).toggleClass("bordaVermelha",!truth);
							if(!this.value){	  
								classOff($(this),"bordaVermelha");
								classOff($(this),"bordaVerde");
								classOn($(this),"typing-field");
							}	
        });           
}
function returnDefaultFields(){      
       typingField.val("");
       typingField.removeClass();
       $("#counter-character").text("0");
       $("#counter-words").text("0");
       $("#time-left").text(time);
       typingField.attr("disabled",false);
       classOff($("#time-left"),"tempoExcedido");
       classOn(typingField,"typing-field");
}

function gameOver(){        
	typingField.attr("disabled",true);
    buttonRestart.attr("disabled",false);
    classOn(typingField,"typingFieldOff");
    checkPhrase();
	insertScoreboard();     
}
function checkPhrase(){
		var phrase = $(".phrase").text();
        var typing = typingField.val();
        var compare = phrase.substr(0,typing.length); 
                        
				var textOk = typing == compare && typing.length == phrase.length;
				
				if(textOk) return true;
						
				else return false;    
}

function classOn(field,classSelected){
    field.addClass(classSelected);
}

function classOff(field,classSelected){   
    field.removeClass(classSelected);
}

function restartGame(){
    refreshLengthPhrase();
    returnDefaultFields();
    startTime();        
}
function blockDefault(field,typing,defaultField){

			field.bind('cut copy paste drop ', function(e) { //não permite colar,arrastar,copiar e nem recortar nenhum item em nosso input
			     e.preventDefault();
				});

                if(typing == false){
						field.bind('keypress',function(e){
                        e.preventDefault();
						});
                } 
                if(defaultField == 'default'){
						$(document).keydown(function(e){
								if(e.which == 113)  field.unbind('cut copy paste drop keydown keyup keypress');                       
						});   
                }  
}

   $(document).ready(function(){
		
		restartGame();      
        refreshCounter();      
        buttonRestart.click(restartGame);
        comparePhrases();
        blockDefault(typingField,true,'default');		
        blockDefault($("#search-phrase-id"),false,'default');
		checkPhrase();	
        catchPhraseAppendTable();
		refreshScoreboard();
		
		$("body").niceScroll({
                cursorcolor:"lightblue",
                cursorwidth:"10px"
        });
   });

   
