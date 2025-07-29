import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "on" : "off";
  const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "" };
  return (
    <>
      <div className="flex flex-col justify-center align-center text-3xl font-bold">
        <h1 className="text-center text-5xl font-bold text-fuchsia-900">
          Toggle Switch
        </h1>
        <div
          className="switchBox"
          style={{ backgroundColor: isOn ? "#4caf50" : "gray" }}
          onClick={handleToggleSwitch}
        >
          <div className={`switch ${isOn ? "onMode" : "offMode"}`}>
            <span className="text-center text-3xl text-red-600 font-bold mode">
              {isOn ? "ON" : "OFF"}
            </span>
          </div>
        </div>
      </div>
    </>
    // <div className="flex flex-col justify-center align-center text-3xl font-bold">
    //   <h1 style={{ color: "#000", textAlign: "center" }}>Toggle Switch</h1>
    //   <div
    //     className="toggle-switch"
    //     style={toggleBGColor}
    //     onClick={handleToggleSwitch}
    //   >
    //     <div className={`switch ${checkIsOn}`}>
    //       <span className="switch-state">{checkIsOn}</span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default App;
