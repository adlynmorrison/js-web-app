define([
	'app/utils'
], function(Utils) {
	'use strict';

	var run = function() {
		test('Test celsius to fahrenheit calculation', function (){
			strictEqual(Utils.celsiusToFarenheit(32), 89.6, 'Test a number');
			strictEqual(Utils.celsiusToFarenheit('hot'), null, 'Test a string');
			strictEqual(Utils.celsiusToFarenheit(), null, 'Test undefined');
			strictEqual(Utils.celsiusToFarenheit(NaN), null, 'Test NaN');
		});
	};

	return {run: run}
});