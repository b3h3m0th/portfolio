import Link from "next/link";

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
    <div className="flex">
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
    <Link href={`/works/${workId}`} className="block">
      <Content />
    </Link>
  ) : (
    <Content />
  );
}
