import { useTime } from "@/lib/hooks";

export default function Clock() {
  const time = useTime();

  return <span>{time}</span>;
}
