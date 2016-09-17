L.mapbox.accessToken = 'pk.eyJ1IjoicnVwZXJ0ZGV2IiwiYSI6ImNpdDZpcTMyeTAxc2YydG13bHRsMTF0dmQifQ.GHPSH3KOSRkbPL92UVdQSQ';
L.control();
var map = L.mapbox.map('map', 'mapbox.satellite');

map.on('locationfound', function(e){
    map.setView(e.latlng, 17);
    L.marker(e.latlng).addTo(map);
    console.log(e.latlng);
});

map.on('click', function(e){
    map.openPopup(''+e.latlng, e.latlng);
});

map.locate();

// var socket = io.connect(window.location.origin);

socket.emit('getSessions');

socket.on('sendSession', function(data){
    console.log(data);
});

// Creates markers for each of the returned sessions
socket.on('returnSessions', function(data){
    data.forEach(function(item){
        L.marker(item.latlng).addTo(map);
    });
});

socket.on('returnCloseSessions', function(data){
   console.log(data);
});