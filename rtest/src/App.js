import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon, L } from "leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';


const DEFAULT_LANGITUDE = -123;
const DEFAULT_LATITUDE = 48;

//maybe move to separate script later
const mIcon = new Icon ({
  iconUrl: "https://vimune.com/assets/marker.svg",
  iconSize: [25, 25]
});

function App() {
  return (
    <div id="site-container">
      <div className="logo-container header-blur">
        
        <img class="logo" src="https://vimune.com/assets/name-white.svg" alt="">
        </img>
        <div class="sub-t arial">connecting the dots...</div>
      </div>
      <div className="box-shadow">

      </div>
      <MapContainer center={[52.52, 13.411]} zoom={12} scrollWheelZoom={true} zoomControl={false}>
        <TileLayer
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
          url="https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
        />

        <Marker icon={mIcon} position={[52.51, 13.411]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={[52.52, 13.421]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>

    
  );
}

export default App;
