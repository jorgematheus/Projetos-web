function insertScoreboard()
{   
    var tableBody = $(".placar").find("tbody");
    var user = "Jorge";
    var numeroPalavras = $("#counter-words").text();
          
    var line = crialine(user,numeroPalavras);
	 
		line.find(".removerUser").click(removeUserScoreboard);	 
			
			tableBody.prepend(line);
	 
			$("#tbl-users").show();	
										   
}

function crialine(user,palavras,icone)
{
	var line = $("<tr>");
	var tdName = $("<td>").text(user);
	var tdNumberWords = $("<td>").text(palavras);
	var tdRemove = $("<td>");
	
	var linkIcon = $("<a>").addClass("removerUser").attr("href","#");
	var icon = $("<i>").addClass("small material-icons").text("delete");
	
		
	var verificaDigitacao = checkPhrase();

		var tdIconWord = $("<td>");

			if(verificaDigitacao) {
				icone = "<i class='small material-icons' style='color:darkgreen; font-weight:bold'>done</i>";
				tdIconWord.append(icone);          
			}
			
			else {
				icone = "<i class='small material-icons' style='color:darkred; font-weight:bold'>close</i>";
				tdIconWord.append(icone); 
			}
								
				linkIcon.append(icon);
				tdRemove.append(linkIcon);	
				
				line.append(tdName);
				line.append(tdNumberWords);
				line.append(tdIconWord);
				line.append(tdRemove);
		
	
	return line;
		
}

function removeUserScoreboard(event)
{
        event.preventDefault();
		var confirma = confirm("Deseja realmente remover o usuário?");
		
		if(confirma){
				
				var removeline = $(this).parents("tr");
				removeline.fadeOut(700);
				
				setTimeout(function(){
					
					removeline.remove();
					
					var lengthTable = $("#scoreboard tbody tr").length;
				
					    if(lengthTable <1) $("#scoreboard").slideUp(900);				
																			
				},700);			
		}	                        
}
$("#button-sync").click(postUser);
function postUser()
{	
	var placar = [];	
	var line = $("#placar-users tr");
	
	line.each(function(){
				
			var score = {
					user: $(this).find("td:nth-child(1)").text(),
					score: $(this).find("td:nth-child(2)").text(),
					icon: $(this).find("td:nth-child(3)").text()
				};
        		placar.push(score);				
				
				var dado = {				
					placar: placar
					}
				$.post("http://localhost:3000/placar",dado);
				console.log("Placar sincronizado com sucesso");
	});
	
}

function refreshScoreboard(){

	    $.get("http://localhost:3000/placar",function(data){
		        $(data).each(function(){
		        		            
		            var icone;	

		            if(this.icon =='done') icone =("<i class='small material-icons' style='color:darkgreen; font-weight:bold'>done</i>");  						
					else icone =("<i class='small material-icons' style='color:darkred; font-weight:bold'>close</i>"); 

						var line = crialine(this.user, this.score,icone);						
		            
		            line.find(".removerUser").click(removeUserScoreboard);
		            $("#tbl-users").append(line);		           
		            $("#scoreboard").show();
		            
	   			 });
	    });

}
