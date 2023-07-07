// import React from 'react'
// import * as S from "../style/Appstyle"
import "../App.css";

const Button = () => {
  const onClickPrimaryButton = () => {
    alert("Primary Button Clicked!!")
  };

  const onClickNevigateButton = () => {
    alert(prompt("Nevigate Button Clicked!!"));
  };

  return (
    <>
      <div>
        <h1>Button</h1>
      </div>
    
      <div className="Button-container">
        <button
          onClick={onClickPrimaryButton}
        >
          Large Primary Button
        </button>

        <button>Medium</button>
        <button>small</button>
      </div>

      <div className="Button-container">
        <button
          onClick={onClickNevigateButton}
        >
          Large Nevigate Button
        </button>

        <button>Medium</button>
        <button>small</button>
      </div>
    </>
  )
}

export default Button