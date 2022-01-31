
// script gestion survol articles
const article = document.querySelectorAll(".blog article");

article.forEach(function (e) {
  e.addEventListener("mouseover", () => {
    e.style.background = "orange";
    e.style.color = "black";
  });
  e.addEventListener("mouseout", () => {
    e.style.background = "black";
    e.style.color = "white";
  });
});

// script affichage map
var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([37.41, 8.82]),
    zoom: 4
  })
});