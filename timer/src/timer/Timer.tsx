import * as React from "react";
import "./timer.css";

import { useCurrentTime } from "./use-current-time";

export const Timer: React.FunctionComponent = () => {
  const time = useCurrentTime();

  return (
    <div className="Timer__container">
      <span className="Timer__text">{time}</span>
    </div>
  );
};
