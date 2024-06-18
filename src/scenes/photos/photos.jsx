import { Locations } from "./photos.js";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { isMobile, isBrowser } from "react-device-detect";

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

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
            className={`photos-grid-item ${
              expandedIndex === index ? `expanded` : ``
            }`}
            key={index}
            onMouseEnter={() => (isMobile ? null : revealDescription(index))}
            onMouseLeave={() => (isMobile ? null : removeDescription(index))}
            onTouchStart={() => (isMobile ? revealDescription(index) : null)}
            onTouchEnd={() => (isMobile ? removeDescription(index) : null)}
          >
            <img src={photo.source} alt={photo.alt} className="grid-photo" />
            <div className="photo-info">
              <div className="photo-location">{photo.location}</div>
            </div>
          </div>
        );
      })}
      {expandedIndex !== null && (
        <div className="overlay">
          <div className="expanded-content">
            <p>{photos[expandedIndex]}</p>
          </div>
        </div>
      )}
    </div>
  );
}
