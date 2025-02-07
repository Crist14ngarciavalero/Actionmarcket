// Coordenadas de la empresa en Santa Pola, Alicante
const empresaCoords = [38.1913, -0.5655];

// Inicializar el mapa
const map = L.map('map').setView(empresaCoords, 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Marcar la ubicación de la empresa
L.marker(empresaCoords).addTo(map)
    .bindPopup("<b>Mi Empresa</b><br>Calle Lérida, 49, Santa Pola, Alicante")
    .openPopup();

// Obtener la ubicación del usuario y calcular la ruta
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        const userCoords = [position.coords.latitude, position.coords.longitude];
        
        // Marcar la ubicación del usuario
        L.marker(userCoords).addTo(map)
            .bindPopup("<b>Tu Ubicación</b>")
            .openPopup();

        // Dibujar la ruta desde el usuario hasta la empresa
        const routeUrl = `https://www.google.com/maps/dir/${userCoords[0]},${userCoords[1]}/38.1913,-0.5655`;
        document.getElementById('map').addEventListener('click', () => {
            window.open(routeUrl, '_blank');
        });

    }, () => {
        console.log("No se pudo obtener la ubicación del usuario.");
    });
}

// Botón para centrar el mapa en la empresa
document.getElementById('centrarMapa').addEventListener('click', () => {
    map.setView(empresaCoords, 15);
});
