import "../../styles/settings.css";
import "./Tooltip.css";
import { useState } from "react";

export function Tooltip({ children, text, position = "top" }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}

      {visible && (
        <div className={`tooltip-box tooltip-${position}`}>
          {text}
          <span className="tooltip-arrow" />
        </div>
      )}
    </div>
  );
}
