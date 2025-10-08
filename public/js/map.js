maptilersdk.config.apiKey = mapToken;
const map = new maptilersdk.Map({
  container: "map", // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.STREETS,
  center: [75.8577, 22.7196], // starting position [lng, lat]
  zoom: 11, // starting zoom
});
