import images from "./photos.json";
import React, { useEffect, useState } from "react";
import "./style.scss";

export default function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos(images["photos"]);
  }, [photos]);

  return (
    <div className="photos-grid">
      {photos.map((photo, i) => {
        return (
          <div className="photos-grid-item" key={i}>
            <div>{photo.location}</div>
          </div>
        );
      })}
    </div>
  );
}
