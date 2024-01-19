import React from "react";
import ColorfulList from "../lists/colorfulList";

export default function TechStackCardBody() {
  const techStackList = [
    {
      id: 0,
      item: "JavaScrtipt",
    },
    {
      id: 1,
      item: "Html",
    },
    {
      id: 2,
      item: "SASS",
    },
    {
      id: 3,
      item: "Reactjs",
    },
    {
      id: 4,
      item: "Zustand",
    },
    {
      id: 5,
      item: "React Router",
    },
    {
      id: 6,
      item: "Typed.js",
    },
  ];

  return (
    <div>
      <ColorfulList list={techStackList} />
    </div>
  );
}
