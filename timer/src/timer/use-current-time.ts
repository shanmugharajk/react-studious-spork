import * as React from "react";

import { getCurrentTime } from "./utils";

export function useCurrentTime() {
  const [time, setTime] = React.useState<string>(getCurrentTime());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return time;
}
