function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7362, lng: -73.9900 },
    zoom: 14,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#212121" }] },
      { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [{ color: "#757575" }]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#2c2c2c" }]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#181818" }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#383838" }]
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212121" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#3c3c3c" }]
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f2f2f" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#000000" }]
      }
    ]
  });
  

  new google.maps.Marker({
    position: { lat: 40.7362, lng: -73.9900 },
    map: map,
    title: "55 Irving Pl, New York, NY"
  });
}
initMap();

