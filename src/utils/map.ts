// let map;

// async function initMap(): Promise<void> {
//     const position = { lat: -32.33278742369604, lng: 115.81538774825357 };

//     // Request needed libraries.
//     //@ts-ignore
//     const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
//     // const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

//     map = new Map(
//         document.getElementById('map') as HTMLElement,
//         {
//             zoom: 4,
//             center: position,
//             mapId: 'DEMO_MAP_ID',
//         }
//     );

//     const marker = new AdvancedMarkerElement({
//         map: map,
//         position: position,
//         title: "Players Men's Hairstylists"
//     });
// }

// initMap();