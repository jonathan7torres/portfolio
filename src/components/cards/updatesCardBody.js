import React from "react";

export default function UpdatesCardBody({ updates }) {
  return (
    <div className="updates-body">
      {updates.map(
        (update) =>
          update.visible && (
            <div key={update.id}>
              <span>{update.date}</span>: <span>{update.description}</span>
            </div>
          )
      )}
    </div>
  );
}
