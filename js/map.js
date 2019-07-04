//** OpenLayers example **//

var osm =  new ol.layer.Tile({             //This object defines layer sources that provide pre-rendered tiled images
 	visible: true,
 	source: new ol.source.OSM()            //Object that defines source of the WMS (Web Map Service)
 })

var geoServerLayer =  new ol.layer.Image({  //Object for server-rendered images           
 	source: new ol.source.ImageWMS({
 		url: 'http://localhost:8082/geoserver/wms',    //url
 		params: {'LAYERS': 'Name of Layer/workspace'}  // WMS request parameters, at least a LAYERS
 })                                                    // parameter is required
});

var map = new ol.Map({                   //For a map to render, a view, a target container ('map')
target:document.getElementById('map'),  // and one or more layers are needed
layers: [osm, geoServerLayer],
 view: new ol.View({    //Modify the pairs of this object to set center, zoom, rotation or resolution of the map
 	center: [0,0],
 	zoom: 0
 })
});

