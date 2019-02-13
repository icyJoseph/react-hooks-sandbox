import React from "react";
import useWidth from "../../Use/useWidth";

import "./index.css";

function ResponsiveText({ children }) {
  return (
    <span className="text-warning" style={{ fontSize: `${useWidth() / 10}pt` }}>
      {children}
    </span>
  );
}

const Responsive = () => (
  <div className="hook">
    <div className="with-padding">
      <ResponsiveText>{useWidth()} px</ResponsiveText>
    </div>
  </div>
);

export default React.memo(Responsive);
