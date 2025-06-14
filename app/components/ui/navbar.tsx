import { Link, NavLink } from "react-router";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Button } from "./button";
import { Github, GithubIcon, MenuIcon } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to={"/"}>
                <img
                  className="h-8 w-auto"
                  src="/assets/icons/logo.svg"
                  alt="Logo"
                />
              </Link>
            </div>

            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="#features"
                className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Features
              </Link>
              <Link
                to="#benefits"
                className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Benefits
              </Link>
              <Link
                to="#about"
                className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                About Us
              </Link>
              <Link
                to="#download"
                className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Download
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <Link
              to="https://github.com/DartSiaProject/dartsia_landing"
              target="_blank"
            >
              <img
                className="w-8"
                src="/assets/icons/github.svg"
                alt="Github Repository"
              />
            </Link>
            <Link
              to="https://play.google.com/store/apps/details?id=com.sia.sia_host_mobile"
              target="_blank"
            >
              <img
                className="h-8 w-auto"
                src="/assets/icons/play-store.svg"
                alt="PLaystore link"
              />
            </Link>
            <Link to={"/"}>
              <img
                className="h-8 w-auto"
                src="/assets/icons/app-store.svg"
                alt="Appstore link"
              />
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden gap-x-4">
            <Link
              to="https://github.com/DartSiaProject/dartsia_landing"
              target="_blank"
            >
              <img
                className="w-8"
                src="/assets/icons/github.svg"
                alt="Github Repository"
              />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <MenuIcon size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="top">
                <SheetHeader>
                  <SheetTitle>
                    <img
                      className="h-8 w-auto"
                      src="/assets/icons/logo.svg"
                      alt="Logo"
                    />
                  </SheetTitle>
                </SheetHeader>
                <SheetClose asChild key="features">
                  <Link
                    to={"#features"}
                    className="px-4 text-gray-500 font-medium"
                  >
                    Features
                  </Link>
                </SheetClose>
                <SheetClose asChild key="benefits">
                  <Link
                    to={"#benefits"}
                    className="px-4 text-gray-500 font-medium"
                  >
                    Benefits
                  </Link>
                </SheetClose>
                <SheetClose asChild key="about">
                  <Link
                    to={"#about"}
                    className="px-4 text-gray-500 font-medium"
                  >
                    About Us
                  </Link>
                </SheetClose>
                <SheetClose asChild key="download">
                  <Link
                    to={"#download"}
                    className="px-4 text-gray-500 font-medium mb-4"
                  >
                    Download
                  </Link>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
