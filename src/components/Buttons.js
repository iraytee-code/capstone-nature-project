import React from "react";
import Reply from "../components/Reply";
import Likes from "./Likes";
import Users from "./Users";

const Buttons = () => {
  return (
    <div className="action-btn">
      <Reply />
      <Users />
      <Likes />
    </div>
  );
};

export default Buttons;
