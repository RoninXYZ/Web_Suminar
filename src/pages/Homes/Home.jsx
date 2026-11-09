

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./Home.css";

const position = [-7.3657, 108.53397];

function Home() {
  return (
    <section className="home page-content">

      <p className="eyebrow">WELCOME TO</p>

      <h1 className="home-title">
        SUMINAR
        <span>CAR WASH</span>
      </h1>

      <div className="line"></div>

      <p className="description">
        YOUR CAR, OUR CARE.
      </p>

      {/* CONTACT */}
      <div className="home-contact">
        <h2>CONTACT US</h2>

        <p>Phone / WhatsApp</p>

        <a href="tel:082219174407">
          0822-1917-4407
        </a>
      </div>

      {/* LOCATION MAP */}
      <div className="home-location">

        <h2>OUR LOCATION</h2>

        <p>SUMINAR CAR WASH</p>

        <MapContainer
          center={position}
          zoom={16}
          scrollWheelZoom={true}
          className="home-map"
        >

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>
              <strong>SUMINAR CAR WASH</strong>
              <br />
              YOUR CAR, OUR CARE.
              <br />
              0822-1917-4407
            </Popup>
          </Marker>

        </MapContainer>

        <p className="map-coordinate">
          LAT: -7.365777 | LONG: 108.53397
        </p>

      </div>

    </section>
  );
}

export default Home;
