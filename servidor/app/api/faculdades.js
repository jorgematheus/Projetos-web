var api = {};




var unip = [
              {
                id:1,
                nome: 'CHÁCARA SANTO ANTÔNIO',
                cursos: ['CIÊNCIA DA COMPUTAÇÃO', 'NUTRIÇÃO', 'DIREITO', 'PUBLICIDADE'],
                periodos: ['MATUTINO', 'DIURNO', 'NOTURNO'],
                mensalidades: [800,600,400]
              },
              {
                id:2,
                nome: 'CIDADE UNIVERSITÁRIA',
                cursos: ['CIÊNCIA DA COMPUTAÇÃO', 'DIREITO', 'EDUCAÇÃO FÍSICA'],
                periodos: ['MATUTINO', 'DIURNO', 'NOTURNO'],
                mensalidades: [600,590,676.25]
              },
              {
                id:3,
                nome: 'PAULISTA',
                cursos: ['FILOSOFIA', 'MATEMÁTICA', 'QUÍMICA', 'FÍSICA', 'ANÁLISE DE SISTEMAS'],
                periodos: ['MATUTINO', 'DIURNO', 'NOTURNO'],
                mensalidades: [600,590,676.25]
              },
              {
                id:4,
                nome: 'ALPHAVILLE',
                cursos: ['SISTEMA DE INFORMAÇÃO', 'DIREITO', 'ESPANHOL', 'TURISMO'],
                periodos: ['MATUTINO', 'NOTURNO'],
                mensalidades: [600,590,676.25]
              },
              {
                id:5,
                nome: 'ANCHIETA',
                cursos: ['TURISMO', 'INGLÊS', 'EDUCAÇÃO FÍSICA'],
                periodos: ['NOTURNO'],
                mensalidades: [600,590,676.25]
              },
              {
                id:6,
                nome: 'ARAÇATUBA',
                cursos: ['CONTABILIDADE', 'ENGENHARIA CIVIL', 'MEDICINA'],
                periodos: ['MATUTINO', 'NOTURNO'],
                mensalidades: [400,1000,2100]
              },
              {
                id:7,
                nome: 'ARARAQUARA',
                cursos: ['ENGENHARIA DA COMPUTAÇÃO', 'ARQUITETURA', 'ENFERMAGEM', 'SOCIOLOGIA'],
                periodos: ['MATUTINO', 'DIURNO', 'NOTURNO'],
                mensalidades: [1000,890,674.47, 580.15]
              },
              {
                id:8,
                nome: 'MANAUS',
                cursos: ['CIÊNCIA DA COMPUTAÇÃO', 'DIREITO', 'EDUCAÇÃO FÍSICA','ARQUITETURA', 'ENFERMAGEM', 'SOCIOLOGIA','ENGENHARIA CIVIL', 'MEDICINA'],
                periodos: ['MATUTINO', 'DIURNO', 'NOTURNO'],
                mensalidades: [600, 590, 676.25, 800, 500.80, 457.85, 1100.70, 2845.47]
              }                                                                                            
           ]             
             
	
api.lista = function(req, res) {

	setTimeout(function() {
		if(req.query.id) return res.json(unip[req.query.id]);
		  res.json(unip);
	},1500);

};

module.exports = api;





