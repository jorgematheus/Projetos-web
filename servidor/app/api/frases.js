var api = {};

var frases = [
	{_id: 0, texto:'O importante não é vencer todos os dias, mas lutar sempre.', tempo: 15 },
	{_id: 1, texto:'Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!.',tempo: 20 },
	{_id: 2, texto:'Aquele que não tem confiança nos outros, não lhes pode ganhar a confiança.', tempo: 18 },
	{_id: 3, texto:'Existem duas tarefas difíceis na Ciência da Computação: invalidação de cache e nomear as coisas.', tempo: 30 },
	{_id: 4, texto:'A única forma de vencer uma discussão é evitá-la.', tempo: 10 },
	{_id: 5, texto:'Na minha máquina funciona.', tempo: 8 },
	{_id: 6, texto:'Hardware é o que você chuta, software é o que você xinga.', tempo: 12 },
	{_id: 7, texto:'O homem nasceu para lutar e a sua vida é uma eterna batalha.', tempo: 16 },
	{_id: 8, texto:'Desconsiderar é ganhar consideração.', tempo: 7},
	{_id: 9, texto:'Existem três jeitos de desenvolver software. O jeito certo, o jeito errado e o meu jeito, que é igual o jeito errado só que mais rápido.', tempo: 40},
	{_id: 10, texto:'Jorge Matheus Nunes',tempo: 10}
	]
	
	
api.lista = function(req, res) {

	setTimeout(function(){
		if(req.query.id) return res.json(frases[req.query.id]);

		res.json(frases);
	},1500);

};

module.exports = api;
