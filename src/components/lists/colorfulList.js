import React from "react";
import "./style/colorfulList.scss";
import useDarkModeStore from "../../stores/darkModeStore";

export default function ColorfulList({ list }) {
  const { darkMode } = useDarkModeStore();

  const colors = [
    "#436B5C", // forrest green
    "#42354C", // plum
    "#6A1D2F", // cherry
    "#9B461F", // Prairie Sand
    "#254252",  // Blue Dianne
    "#90533B", // Chestnut
    "#383330", // Black Coffee
    "#33576E" // Seven Seas
  ];
  const darkModeBackground = "rgb(15 23 42)";
  const colorMint = "#64ffda";

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
            style={
              darkMode
                ? {
                    backgroundColor: darkModeBackground,
                    color: colorMint,
                    border: `1px solid ${colorMint}`,
                  }
                : { backgroundColor: getColor(), color: "white" }
            }
            key={item.id}
          >
            {item.item}
          </li>
        ))}
      </ul>
    </div>
  );
}
