//Alona Zahychenko
function initMap() {
  const mapElement = document.querySelector('.contacts__map-api');
  const fallbackIframe = document.querySelector('.contacts__map-fallback');

  if (!mapElement) {
    fallbackIframe.style.display = 'block';
    return;
  }

  const map = new google.maps.Map(mapElement, {
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

  setTimeout(() => {
    const hasGoogleMapContent = mapElement.querySelector('canvas, div');
    if (!hasGoogleMapContent) {
      fallbackIframe.style.display = 'block';
      mapElement.style.display = 'none';
    }
  }, 2000);
}

window.initMap = initMap;
