import React, { useState, useEffect } from "react";
import "./index.css";

// this component changes color as the screen resizes
export function Resize() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div className="hook">
      <div className="resize">
        <span>The width is</span>
        <br />
        <span className="text-info">{width}px</span>
      </div>
    </div>
  );
}

export default Resize;
