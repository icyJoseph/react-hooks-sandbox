import React from "react";
import useWidth from "../../Use/useWidth";

const Responsive = () => (
  <div className="hook">
    <div style={{ width: `${useWidth() / 2}px` }} />
    <span className="text-warning" style={{ fontSize: `${useWidth() / 10}pt` }}>
      {useWidth()} px
    </span>
  </div>
);

export default Responsive;
