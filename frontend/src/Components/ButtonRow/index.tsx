import React from "react";

interface Props {
  leftButtonText: string[];
  rightButtonText: string[];
}

const ButtonRow: React.FC<Props> = ({ leftButtonText, rightButtonText }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        {leftButtonText.map((text, index) => (
          <button key={index} style={{ width: "100px", height: "50px" }}>
            {text}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {rightButtonText.map((text, index) => (
          <button key={index} style={{ width: "100px", height: "50px" }}>
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonRow;
