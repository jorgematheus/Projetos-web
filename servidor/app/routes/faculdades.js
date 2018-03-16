 module.exports = function(app) {

	var api = app.api.faculdades;

	app.route('/faculdades/')
		.get(api.lista);
	}