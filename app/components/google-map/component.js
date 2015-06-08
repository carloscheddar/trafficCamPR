/* global google */

import Ember from 'ember';

export default Ember.Component.extend({

	map:null,
	lat:null,
	lng:null,
	mapThumbnail:true,

	createMap: function() {
		let map;
		let location = new google.maps.LatLng(this.lat, this.lng);
		let mapOptions;

		if (this.mapThumbnail === true) {
			mapOptions = {
				center: location,
				zoom: 18,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI:true,
				disableDoubleClickZoom:true,
				draggable: false,
				draggableCursor: false,
				overviewMapControl: false,
				scrollwheel: false
			};
		} else {
			mapOptions = {
				center: location,
				zoom: 20,
				mapTypeId: google.maps.MapTypeId.SATELLITE,
			};
		}

		map = new google.maps.Map(this.$().get(0), mapOptions);
		let trafficLayer = new google.maps.TrafficLayer();
		trafficLayer.setMap(map);
		this.set('map', map);
	}.on('didInsertElement')
});
