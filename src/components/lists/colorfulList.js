import React from "react";
import "./style/colorfulList.scss";

export default function ColorfulList({ list }) {
  const colors = ["#ff8533", "#ff5050", "#668cff", "#40bf80", "#dd99ff"];

  const getColor = () => {
    let num = Math.floor(Math.random() * colors.length);
    return colors[num];
  };

  return (
    <div className="list-container-colorful">
      <ul className="list-colorful">
        {list.map((item) => (
          <li
            className="list-item-colorful"
            style={{ backgroundColor: getColor(), color: "white" }}
            key={item.id}
          >
            {item.item}
          </li>
        ))}
      </ul>
    </div>
  );
}
