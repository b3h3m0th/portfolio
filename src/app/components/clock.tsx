import { useTime } from "@/app/hooks";

export default function Clock() {
  const time = useTime();

  return <span>{time}</span>;
}
