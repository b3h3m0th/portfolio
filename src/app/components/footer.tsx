const year = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="mt-20 mb-8 flex justify-center">
      <span className="text-neutral-600">
        Made with 🖤 by Simon Ostini &copy; {year}
      </span>
    </div>
  );
}
