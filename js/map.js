//** OpenLayers example **//

var map = new ol.Map({
target:document.getElementById ('map'),
layers: [
 new ol.layer.Tile({
 	visible: true,
 	source: new ol.source.OSM()
 })
 ],
 view: new ol.View({
 	center: [0,0],
 	zoom: 0
 })
});