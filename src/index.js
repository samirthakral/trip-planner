const mapboxgl = require('mapbox-gl');
import markerBuilder from './marker';

mapboxgl.accessToken = 'pk.eyJ1IjoiamFtaTA4MjEiLCJhIjoiY2pnbzNxbmQxMDEybTJ5a3M3anhpeDhtMSJ9.dcwdPqqrZJeGUph6Kr9kDw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.638873, 41.894728], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const marker1 = markerBuilder('Hotel', [-87.621905, 41.887455]);
const marker2 = markerBuilder('Activty', [-87.638873, 41.894728]);
const marker3 = markerBuilder('Restaurant', [-87.648175, 41.913655]);

[marker1, marker2, marker3].forEach( function(marker){
  marker.addTo(map);
});
