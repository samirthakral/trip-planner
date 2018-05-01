const mapboxgl = require('mapbox-gl');

const markerBuilder = function(type, coor){

  const markerDomEl = document.createElement('div');
  let bgImg = '';

  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';

  if (type === 'Hotel'){
    bgImg = 'http://i.imgur.com/D9574Cu.png';
  } else if (type === 'Restaurant'){
    bgImg = 'http://i.imgur.com/cqR6pUI.png';
  } else {
    // Activity
    bgImg = 'http://i.imgur.com/WbMOfMl.png';
  }

  markerDomEl.style.backgroundImage = `url(${bgImg})`;

  return new mapboxgl.Marker(markerDomEl).setLngLat(coor);
};

export default markerBuilder;
