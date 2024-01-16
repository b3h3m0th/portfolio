import { useTime } from "@/app/hooks";

export function Clock() {
  const time = useTime();

  return <span>{time}</span>;
}
