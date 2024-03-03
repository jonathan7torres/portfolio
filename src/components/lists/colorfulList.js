import React from "react";
import "./style/colorfulList.scss";
import useDarkModeStore from "../../stores/darkModeStore";

export default function ColorfulList({ list }) {
  const { darkMode } = useDarkModeStore();

  const colors = [
    "#B7BF96", 
    "#E25439", 
    "#BF9550", 
    "#E6B5A6", 
    "#436B5C", 
    "#42354C", 
    "#6A1D2F", 
    "#9B461F", // Prairie Sand
    "#254252" // Blue Dianne
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
