import React from "react";
import useOptimizedResize from "../../Use/useOptimizedResize";
import "./index.css";


function ResizeOptimized() {
  const [width, height] = useOptimizedResize();
  return (
    <div className="hook">
      <div className="optimized-resize card-like">
        <span className="lead text-warning">Optimized</span>
        <span className="text-muted">
          Width: <span className="text-success">{width}</span> px
        </span>
        <span className="text-muted">
          Height: <span className="text-danger">{height}</span> px
        </span>
      </div>
    </div>
  );
}

export default React.memo(ResizeOptimized);
