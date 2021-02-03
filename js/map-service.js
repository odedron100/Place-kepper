function initMap(lat, lng) {
  if (!lat) lat = 29.55805;
  if (!lng) lng = 34.94821;
  var elMap = document.querySelector('.map');
  var options = {
    center: { lat, lng },
    zoom: 16
  };

  var map = new google.maps.Map(
    elMap,
    options
  );

  var marker = new google.maps.Marker({
    position: { lat, lng },
    map,
    title: 'Hello World!'
  });
}
