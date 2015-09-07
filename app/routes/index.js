import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
			return Ember.RSVP.hash({

				listData: function() {
					var items = [];
					for (var i = 0; i < 10000; i++) {
						items.push({
							name: "Item " + i
						});
					}
					return items;
				}.property(),

				viewport: function() {
					var viewport = {
						width: $(window).width(),
						height: $(window).height()
					};
					console.log('VIEWPORT: ', viewport);
					return viewport;
				}.property()
			}); //end hash
		} //end model
});
