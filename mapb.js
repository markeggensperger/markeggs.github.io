var bryantParkLatLng = L.latLng(40.753589, -73.983206);
var markHouseLatLng = L.latLng(40.777539, -73.977099);
var allowableRadiusMeters = 150
var beginningImageId = 'clue8b'
var endingImageId = 'clue9abc'
var interestPointLatLng = bryantParkLatLng

var mymap = L.map('mapid');

mymap.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var distance = e.latlng.distanceTo(interestPointLatLng)
    if (distance <= allowableRadiusMeters) {
        setImageVisible(beginningImageId, false)
        setImageVisible(endingImageId, true)
    }
}

mymap.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mymap.on('locationerror', onLocationError);

function setImageVisible(id, visible) {
    var img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');
    img.style.height = (visible ? '100%' : '0')
}
