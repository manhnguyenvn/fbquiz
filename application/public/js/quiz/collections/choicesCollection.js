define([
	'app',
	'backbone'
],
function( App, Backbone ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {
			console.log('initialize a Choices collection');
		}
	});
});
