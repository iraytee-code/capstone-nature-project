import React from "react-dom";
import Buttons from "./components/Buttons";
import ProfileDescription from "./components/ProfileDescription";
import ProfilePic from "./components/ProfilePic";

function App() {
  return (
    <div className="wrapper">
      <div className="wrapper-ProfilePic">
        <ProfilePic />
      </div>
      <ProfileDescription />
      <Buttons />
    </div>
  );
}

export default App;
