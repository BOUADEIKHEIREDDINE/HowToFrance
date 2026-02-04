export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t mt-10">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 gap-2">
        <p>&copy; {year} How To France. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#legal" className="hover:text-primary">
            Legal notice
          </a>
          <a href="#privacy" className="hover:text-primary">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
