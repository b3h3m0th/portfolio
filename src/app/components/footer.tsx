const year = new Date().getFullYear();

export function Footer() {
  return (
    <div className="mt-20 mb-8 flex justify-center">
      <span>Made with 🤍 by Simon Ostini &copy; {year}</span>
    </div>
  );
}
