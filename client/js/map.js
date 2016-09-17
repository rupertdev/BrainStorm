L.mapbox.accessToken = 'pk.eyJ1IjoicnVwZXJ0ZGV2IiwiYSI6ImNpdDZpcTMyeTAxc2YydG13bHRsMTF0dmQifQ.GHPSH3KOSRkbPL92UVdQSQ';
L.control();
var map = L.mapbox.map('map', 'mapbox.satellite');

map.on('locationfound', function(e){
    map.setView(e.latlng, 17);
    L.marker(e.latlng).addTo(map);
    console.log(e.latlng);
});
map.locate();