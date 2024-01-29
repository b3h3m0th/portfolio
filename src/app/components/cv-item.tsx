import Link from "next/link";
import { BezierLine } from "./bezier-line";

type CVItemProps = {
  startDate: Date;
  endDate?: Date;
  position: string;
  company: string;
  workId?: string;
};

export function CVItem({
  startDate,
  endDate,
  position,
  company,
  workId,
}: CVItemProps) {
  const Content = () => (
    <div className="flex mt-4">
      <div className="flex-1">{`${startDate.toLocaleString("en", {
        month: "long",
        year: "numeric",
      })} - ${
        endDate
          ? endDate.toLocaleString("en", {
              month: "long",
              year: "numeric",
            })
          : "Present"
      }`}</div>
      <div className="flex flex-col flex-[2]">
        <div>{position}</div>
        <div className="font-semibold ">{company}</div>
      </div>
    </div>
  );

  return workId ? (
    <div>
      <BezierLine />
      <Link href={`/works/${workId}`} className="block">
        <Content />
      </Link>
    </div>
  ) : (
    <div>
      <BezierLine />
      <Content />
    </div>
  );
}
