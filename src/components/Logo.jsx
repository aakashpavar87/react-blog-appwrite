import React from "react";
import { logo } from "../assets";

function Logo({ width = "100px" }) {
  return (
    <div className="w-20">
      <img src={logo} width={width} alt="blog app logo" />
    </div>
  );
}

export default Logo;
