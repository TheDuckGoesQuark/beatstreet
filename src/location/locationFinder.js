import MapboxClient from 'mapbox'
var client = new MapboxClient('pk.eyJ1IjoidGhvbWFzZ29kZnJleTk3IiwiYSI6ImNqYWZoamt2NTE2MXcycW9pYWVvdHVxYWQifQ.5-oVq2GCvmOXuySwYZz_-w');
var poi;
var address;
var place;
var neighbourhood;

export function geoReverse() {

    if (!navigator.geolocation){
        return;
    }

    function success(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;


        console.log('Latitude is ' + latitude + ' Longitude is ' + longitude)

        client.geocodeReverse(
            {latitude: latitude, longitude: longitude},
            function (err, res) {
                // res is a GeoJSON document with geocoding matches
                console.log(res);
                let f = res.features;
                console.log(f);
                for (var i = 0; i < f.length; i++) {
                    var obj = f[i];
                    console.log(obj.place_name);
                    if (obj.id.includes('address')){
                        address = obj.text;
                    }
                    if (obj.id.includes('poi')){
                        poi = obj.text;
                    }
                    if (obj.id.includes('place')){
                        place = obj.text;
                    }
                    if (obj.id.includes('neighbourhood')){
                        neighbourhood = obj.text;
                    }
                }

                if (address){
                    // if(spotifyapi.resultExists){}
                    console.log('Address is ' + address);
                }
                else if(poi) {
                    console.log('Point of Interest is ' + poi);
                }
                else if(place) {
                    console.log('Place is ' + address);
                }
                else if(neighbourhood) {
                    console.log('Neighbourhood is ' + neighbourhood);
                }
                return res.features;
            }).then((features)=>{
            console.log(features);
        });
    }

    function error() {
        console.log("Unable to retrieve your location");
    }

    console.log("Locating…");

    navigator.geolocation.getCurrentPosition(success, error);
}