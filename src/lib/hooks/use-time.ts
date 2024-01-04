import { useEffect, useState } from "react";

export const useTime = (refreshCycle = 100) => {
  const [now, setNow] = useState("");

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setNow(
          new Intl.DateTimeFormat("en-US", {
            timeZone: "Europe/Stockholm",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: false,
          }).format(new Date())
        ),
      refreshCycle
    );

    return () => clearInterval(intervalId);
  }, [refreshCycle, setNow]);

  return now;
};
