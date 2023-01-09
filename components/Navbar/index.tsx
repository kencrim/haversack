import icon from "~/public/icon.png";

export function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="px-4">
        <div className="relative flex h-10 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-6 w-auto" src={icon.src} alt="haversack icon" />
              <h2>Haversack</h2>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
