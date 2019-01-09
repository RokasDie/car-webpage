function google_maps_init() {
    'use strict'
    var roemerberg = {lat: 54.860025, lng: 23.954911}
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: roemerberg
    })
  
    var marker = new google.maps.Marker({
      position: roemerberg,
      map: map
    })
  }
  
  function google_maps_lazyload(api_key) {
    'use strict'
  
    if (api_key) {
      var options = {
        rootMargin: '100px',
        threshold: 0
      }
  
      var map = document.getElementById('map')
  
      var observer = new IntersectionObserver(
        function(entries, self) {
          // Intersecting with Edge workaround https://calendar.perfplanet.com/2017/progressive-image-loading-using-intersection-observer-and-sqip/#comment-102838
          var isIntersecting = typeof entries[0].isIntersecting === 'boolean' ? entries[0].isIntersecting : entries[0].intersectionRatio > 0
          if (isIntersecting) {
            var mapsJS = document.createElement('script')
            mapsJS.src = 'https://maps.googleapis.com/maps/api/js?callback=google_maps_init&key=' + api_key +'&language=lt&region=LTU'
            document.getElementsByTagName('head')[0].appendChild(mapsJS)
            self.unobserve(map)
          }
        },
        options
      )
  
      observer.observe(map)
    }
  }
  
  google_maps_lazyload("AIzaSyCZ68VzvpHV7wiBt3P1NXsaUGlZJO5G06I")