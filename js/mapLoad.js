L.mapbox.accessToken = 'pk.eyJ1IjoiemlhLW0iLCJhIjoiQjM5aVpfTSJ9.s_U7YxQCK-Zq5SaJemH5bA';
var minlatbound = 35.743219, minlonbound = 25.172975, maxlatbound = 42.335274, maxlonbound = 45.190398;
var southWestbound = L.latLng(minlatbound, minlonbound),
    northEastbound = L.latLng(maxlatbound, maxlonbound),
    bounds = L.latLngBounds(southWestbound, northEastbound);

var map = L.mapbox.map('map-div', 'mapbox.dark', {
    maxBounds: bounds,
    maxZoom: 19,
    minZoom: 6
});
map.fitBounds(bounds)
