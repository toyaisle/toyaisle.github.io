function initMap() {
    const storeLocation = { lat: 51.045, lng: -114.087 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: storeLocation,
    });
    const marker = new google.maps.Marker({
        position: storeLocation,
        map: map,
    });
}

document.addEventListener('DOMContentLoaded', initMap);
