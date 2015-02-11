define([
	'underscore'
], function (_){
	//template objects
	var Templates = {};

	Templates['places'] = [
		'<div class="panel panel-info">',
			'<div class="panel-heading">',
				'<h3 class="panel-title">',
					'<%= name %> - <%= countryCode %>',
				'<h3>',
			'</div>',
			'<div class="panel-body">',
				'Panel content',
			'</div>',
		'</div>'
	//build as array then build as string
	].join('');
	//loop throuhg templates
	for (var tmpl in Templates) {
		//on on properties
		if(Templates.hasOwnProperty(tmpl)){
			//compiles each of the strings
			Templates[tmpl] = _.template(Templates[tmpl]);
		}
	}

	return Templates;
});