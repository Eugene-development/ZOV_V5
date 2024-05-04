// 'use client'
// import { useState, useEffect } from 'react';
// import L from 'leaflet';

// export default function Page() {
//     const [coords, setCoords] = useState({ latitude: null, longitude: null });
//     const [map, setMap] = useState(null);

//     useEffect(() => {
//         if (coords.latitude && coords.longitude && !map) {
//             const initialMap = L.map('map').setView([coords.latitude, coords.longitude], 13);
//             L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//                 attribution: '© OpenStreetMap contributors'
//             }).addTo(initialMap);
//             setMap(initialMap);
//         }
//     }, [coords, map]);

//     const displayGeoData = (position) => {
//         setCoords({ latitude: position.coords.latitude, longitude: position.coords.longitude });
//     }

//     const displayError = (error) => {
//         console.error('Geolocation error:', error);
//     }

//     useEffect(() => {
//         navigator.geolocation.getCurrentPosition(displayGeoData, displayError);
//     }, []);

//     return (
//         <div>
//             <div id="map" style={{ height: '500px', width: '100%' }}></div>
//             Latitude: {coords.latitude}, Longitude: {coords.longitude}
//         </div>
//     );
// }



export const metadata = {
    title: "Белорусская фабрика мебели ЗОВ ",
    description: "",
    content: "noindex"
};

export default function page() {
    return (
        <div>page</div>
    )
}
