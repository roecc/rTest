import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

const DEFAULT_LANGITUDE = -123;
const DEFAULT_LATITUDE = 48;

function App() {
  return (
    <div id="site-container">
      <div class="box-shadow">

      </div>
      <MapContainer center={[52.52, 13.411]} zoom={12} scrollWheelZoom={true} zoomControl={false}>
        <TileLayer
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
          url="https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
        />

        <Marker position={[52.51, 13.411]}>
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
