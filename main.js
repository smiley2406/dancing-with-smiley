window.addEventListener('load', function () {
    console.log('we is good');
    init();
});

const handlePositionError = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
};
const init = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibHRkbiIsImEiOiJjbGoybWhydXIwZDRwM2RvMGZjZ2dwaWR2In0.vvl3SlGi0BD1DVcs2qYwqQ';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v11',
    });

    const setCurrentPosition = (position) => {
        map.setCenter([position.coords.longitude, position.coords.latitude]);
        map.setZoom(15);

        const marker = new mapboxgl.Marker({
            color: '#a9ffa9',
        })
            .setLngLat([position.coords.longitude, position.coords.latitude])
            .addTo(map);
    };

    map.on('load', () => {
        navigator.geolocation.getCurrentPosition(setCurrentPosition, handlePositionError);
        console.log('getting position');
    });
};
