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

	Templates['day'] = [
		'<div>',
			'<img src="<%= icon_url %>" alt="" class="img-thumbnail">',
			'<br /><%= conditions %>',
		'</div>'
	].join('');


	Templates['modal'] = [
		'<div class="modal fade">',
			'<div class="modal-dialog">',
				'<div class="modal-content">,
					<div class="modal-content">',
						'<buttong type="button" class="close" data-dismis=modal" aria-hidden="true">',
						'h4 class="modal-title><%=title %></h4>',
					'</div>',
					'div class="modal-body">test</div>',
				'</div>',
			'</div>',
		'</div>'
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