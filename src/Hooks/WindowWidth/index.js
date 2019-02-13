import React from "react";
import useWidth from "../../Use/useWindowWidth";

import "./index.css";

function Text({ children }) {
  return (
    <span className="text-warning" style={{ fontSize: `${useWidth() / 10}pt` }}>
      {children}
    </span>
  );
}

function WindowWidth() {
  return (
    <div className="hook">
      <div className="with-padding">
        <Text>{useWidth()} px</Text>
      </div>
    </div>
  );
}

export default React.memo(WindowWidth);
