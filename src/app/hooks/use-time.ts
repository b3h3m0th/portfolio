import { useEffect, useState } from "react";

export const useTime = (refreshCycle = 100) => {
  const [now, setNow] = useState<null | string>(null);

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setNow(
          new Intl.DateTimeFormat("en-US", {
            timeZone: "Europe/Vienna",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }).format(new Date())
        ),
      refreshCycle
    );

    return () => clearInterval(intervalId);
  }, [refreshCycle, setNow]);

  return now;
};
