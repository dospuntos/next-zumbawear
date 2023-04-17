export default function Header() {
  return (
    <header className="">
      <nav className="fixed w-full bg-gray-800 text-white z-30">
        <div className="container px-4 flex py-3">
          <div className="flex-1  leading-9 align-baseline">
            <a
              className="text-2xl font-bold text-shadow-sm"
              href="http://localhost:3000"
            >
              Zumbawear Wholesale
            </a>
            <a
              className="ml-4 text-2xl text-shadow-sm"
              href="http://localhost:3000"
            >
              Calendar
            </a>
          </div>
          <div className="flex-1 text-right leading-9 align-baseline">
            <span className="inline-block mr-4">
              Hi Joanne Tatiana Maidana Lagos
            </span>
            <a
              className="inline-block font-bold px-4 bg-black"
              href="http://localhost:3000"
            >
              Log out
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
