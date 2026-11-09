



import { useState } from "react";
import "./Gallery.css";

const photos = [
  { id: 1, title: "CAR WASH", image: "/gallery/photo01.jpg" },
  { id: 2, title: "AUTO DETAILING", image: "/gallery/photo02.jpg" },
  { id: 3, title: "INTERIOR CLEANING", image: "/gallery/photo03.jpg" },
  { id: 4, title: "EXTERIOR CARE", image: "/gallery/photo04.jpg" },
  { id: 5, title: "PAINT POLISHING", image: "/gallery/photo05.jpg" },
  { id: 6, title: "ENGINE CLEANING", image: "/gallery/photo06.jpg" },
  { id: 7, title: "MOTOR WASH", image: "/gallery/photo07.jpg" },
  { id: 8, title: "PAINT PROTECTION", image: "/gallery/photo08.jpg" },
  { id: 9, title: "OUR SERVICES", image: "/gallery/photo09.jpg" }
];

function Gallery() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section className="gallery page-content">

      <p className="eyebrow">OUR WORK / PORTFOLIO</p>
      <h1>SUMINAR<span>GALLERY</span></h1>
      <div className="line"></div>
      <p className="description">
        PROFESSIONAL CAR WASH & DETAILING
      </p>

      <div className="gallery-grid">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={`gallery-card ${
              activePhoto === photo.id ? "zoomed" : ""
            }`}
            onClick={() =>
              setActivePhoto(
                activePhoto === photo.id ? null : photo.id
              )
            }
          >
            <img src={photo.image} alt={photo.title} />

            <div className="photo-overlay">
              <span>0{photo.id}</span>
              <h3>{photo.title}</h3>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Gallery;
