function initMap() {
    const part1 = 'AIzaSyAzwD2J3';
    const part2 = 'kG-4f0BGDrQFCSo';
    const part3 = '1qFCMxd0UTA';
    const apiKey = `${part1}${part2}${part3}`;
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
