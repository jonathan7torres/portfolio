import React from "react";
import "./style/colorfulList.scss";
import useDarkModeStore from "../../stores/darkModeStore";

export default function ColorfulList({ list }) {
  const { darkMode } = useDarkModeStore();

  const colors = ["#ff8533", "#ff5050", "#668cff", "#40bf80", "#dd99ff"];
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
