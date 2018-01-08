import Map from '../src/ol/Map.js';
import View from '../src/ol/View.js';
import {defaults as defaultControls} from '../src/ol/control.js';
import TileLayer from '../src/ol/layer/Tile.js';
import {fromLonLat} from '../src/ol/proj.js';
import OSM from '../src/ol/source/OSM.js';
import _ol_source_TileDebug_ from '../src/ol/source/TileDebug.js';


var osmSource = new OSM();
var map = new Map({
  layers: [
    new TileLayer({
      source: osmSource
    }),
    new TileLayer({
      source: new _ol_source_TileDebug_({
        projection: 'EPSG:3857',
        tileGrid: osmSource.getTileGrid()
      })
    })
  ],
  target: 'map',
  controls: defaultControls({
    attributionOptions: {
      collapsible: false
    }
  }),
  view: new View({
    center: fromLonLat([-0.1275, 51.507222]),
    zoom: 10
  })
});
