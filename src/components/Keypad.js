import React from "react";
import Button from "./Button"
export default function Keypad({ buttonsData, handleClick }) {
  return (
    <div style={{width:"200px",border:"2px solid",display:"grid",
    gridTemplateColumns:"repeat(4,1fr)",gridTemplateRows:"auto"
    }}>
      {buttonsData.map((item) => {
        return <Button value={item.value} className={item.className} handleClick={handleClick} />;
      })}
    </div>
  );
}
