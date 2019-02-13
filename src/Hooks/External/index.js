import React from "react";
import useOptimizedResize from "use-optimized-resize";

export function External() {
  const [width, height] = useOptimizedResize();
  return (
    <div className="hook">
      <div className="padded">
        <p className="lead">
          The current width: {width} px, and height: {height} px.
        </p>
      </div>
    </div>
  );
}

export default External;
