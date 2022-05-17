console.log(document.cookie);
function initMap() {
  const subway = { lat: 43.77545930574332, lng: -79.2569517052834 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 19.6,
    center: subway,
  });
  const marker = new google.maps.Marker({
    position: subway,
    map: map,
  });
}