import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center">
          <div className="flex flex-col gap-y-4">
            <Link to={"/"}>
              <img
                src="/assets/icons/logo.svg"
                className="h-8 w-8"
                alt="Logo"
              />
            </Link>

            <div className="flex gap-x-4">
              <Link to="#download" className="hover:text-gray-400">
                Download Now
              </Link>
              <Link to="#download" className="hover:text-gray-400">
                License
              </Link>
            </div>

            <div className="flex gap-x-4">
              <Link to="#features" className="hover:text-gray-400">
                Features
              </Link>
              <Link to="#benefits" className="hover:text-gray-400">
                Benefits
              </Link>
              <Link to="#about" className="hover:text-gray-400">
                About us
              </Link>
              <Link to="#download" className="hover:text-gray-400">
                Download
              </Link>
            </div>
          </div>
          <div className="flex md:flex-col gap-y-4 md:place-self-end mt-4 md:mt-0">
            <p className="hidden md:block">Get the App</p>
            <Link to={"/"}>
              <img
                className="h-8 w-auto"
                src="/assets/icons/play-store.svg"
                alt="Logo"
              />
            </Link>
            <Link to={"/"}>
              <img
                className="h-8 w-auto"
                src="/assets/icons/app-store.svg"
                alt="Logo"
              />
            </Link>
          </div>
        </div>
        <div className="text-gray-400 mt-8">
          &copy; 2025 Dartsia Team. All rights reserved
        </div>
      </div>
    </footer>
  );
}
