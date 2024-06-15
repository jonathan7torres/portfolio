import { Locations } from "./photos.js";
import React, { useEffect, useState } from "react";
import "./style.scss";

export default function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos(Locations);
  }, [photos]);

  const revealDescription = (index) => {
    var navigation = document.getElementsByClassName("photo-info");
    navigation[index].classList.add("reveal");
  };

  const removeDescription = (index) => {
    var navigation = document.getElementsByClassName("photo-info");
    navigation[index].classList.remove("reveal");
  };

  return (
    <div className="photos-grid">
      {photos.map((photo, index) => {
        return (
          <div
            className="photos-grid-item"
            key={index}
            onMouseEnter={() => revealDescription(index)}
            onMouseLeave={(i) => removeDescription(index)}
          >
            <img src={photo.source} alt={photo.alt} className="grid-photo" />
            <div className="photo-info">
              <div className="photo-location">{photo.location}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
