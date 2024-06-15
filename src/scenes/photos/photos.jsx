import { Locations } from "./photos.js";
import React, { useEffect, useState } from "react";
import "./style.scss";

export default function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos(Locations);
  }, [photos]);

  return (
    <div className="photos-grid">
      {photos.map((photo, i) => {
        return (
          <div className="photos-grid-item" key={i}>
            <div>{photo.location}</div>
            <img src={photo.source} alt={photo.alt} className="grid-photo" />
          </div>
        );
      })}
    </div>
  );
}
