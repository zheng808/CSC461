function initialize() {

  const mapID       = "mymap"
  
  // center of this embedded map
  const centerLat   = 26.591979
  const centerLong  = 106.704088
  const zoomFactor  = 16   // from 10 to 19

  // first marker
  const marker1Lat  = 26.5921995
  const marker1Long = 106.703466
  const marker1Title= "Traditional Bijie Characteristic Dougan"
  const marker1URL  = "https://goo.gl/maps/CVMs4xhUSVv"
  
  
  // second marker
  const marker2Lat  = 26.5912689 
  const marker2Long = 106.7012022
  const marker2Title= "Zongjiang Laochuancai"
  const marker2URL  = "https://goo.gl/maps/n82sBZM1WPJ2"

  var center = new google.maps.LatLng(centerLat, centerLong)

  var mapOptions = {
    zoom: zoomFactor,
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(document.getElementById(mapID), mapOptions);

  // we will create two markers
  var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(marker1Lat, marker1Long),
      map: map,
      title: marker1Title
  })

  var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(marker2Lat, marker2Long),
      map: map,
      title: marker2Title
  })
  
  // we will make these markers "clickable", i.e., when you click it, it
  // will visit the corresponding website.
  google.maps.event.addListener(marker1, "click", function() {window.location = marker1URL})

  google.maps.event.addListener(marker2, "click", function() {window.location = marker2URL})
  
}

google.maps.event.addDomListener(window, 'load', initialize)

