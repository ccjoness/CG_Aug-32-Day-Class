// Vector Source for quake circles layer
var vectorSource = new ol.source.Vector({
    projection: 'EPSG:4326'
});

// Vector Layer for quake circles
var vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    // style: style
});

// Styling for circles
// var style = new ol.style.Style({
//     fill: new ol.style.Fill({
//         color: 'rgba(255, 100, 50, 0.3)'
//     }),
//     stroke: new ol.style.Stroke({
//         width: 2,
//         color: 'rgba(255, 100, 50, 0.8)'
//     }),
//     image: new ol.style.Circle({
//         fill: new ol.style.Fill({
//             color: 'rgba(55, 200, 150, 0.5)'
//         }),
//         stroke: new ol.style.Stroke({
//             width: 1,
//             color: 'rgba(55, 200, 150, 0.8)'
//         }),
//         radius: 7
//     })
// });



// Maps
var map = new ol.Map({
    target: 'map',  // The DOM element that will contains the map
    renderer: 'canvas', // Force the renderer to be used
    layers: [
        // Add a new Tile layer getting tiles from OpenStreetMap source
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        vectorLayer
    ],
    // Create a view centered on the specified location and zoom level
    view: new ol.View({
        center: ol.proj.transform([0, 0], 'EPSG:4326', 'EPSG:3857'),
        zoom: 3
    })
});


// Ajax call to build quake data.
function getQuakeData() {
    console.log('Updating...');
    $.ajax({
        url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson',
        type: 'GET',
        success: function (response) {
            var features = new Array(response.features.length - 1);
            $.each(response.features, function (index, arr) {
                var lon = arr.geometry.coordinates[0];
                var lat = arr.geometry.coordinates[1];
                var p = ol.proj.fromLonLat([lon, lat], 'EPSG:3857');
                var circle = new ol.geom.Circle(
                    p,
                    arr.properties.mag * 20000
                );
                features[index] = new ol.Feature(circle);

            });

            vectorSource.clear();
            vectorSource.addFeatures(features);
            console.log('Done');
        }
    });

}

getQuakeData();
setInterval(getQuakeData, 300000);
