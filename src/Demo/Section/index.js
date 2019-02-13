import React from "react";

export function Section({ title, subtitle, children }) {
  return (
    <section>
      <header>
        {title && (
          <h1>
            <code>{title}</code>
          </h1>
        )}
        {subtitle && (
          <h2>
            <code>{subtitle}</code>
          </h2>
        )}
      </header>
      {children && <div className="container with-flex-wrap">{children}</div>}
    </section>
  );
}

export default React.memo(Section);
