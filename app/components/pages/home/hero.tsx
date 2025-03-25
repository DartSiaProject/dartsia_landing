import { CirclePlay } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export default function Hero() {
  return (
    <section className="relative py-10 bg-[url(/assets/images/background.svg)] bg-cover bg-center bg-no-repeat mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 justify-center items-center gap-8 py-8">
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-full lg:col-span-2 mt-8 md:mt-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-start">
                  The easiest way to access and monitor your Renterd Server
                </h1>
                <p className="text-lg font-light text-center md:text-start">
                  Dartsia has been specifically designed to allow you to
                  display, configure and access a Renterd server on the Sia
                  network.
                </p>
                <div className="mt-8 md:mt-8 flex gap-4 justify-center md:justify-start">
                  <Link to="/docs">
                    <Button>Get Started</Button>
                  </Link>
                  {/* watch video link */}
                  <Link to="/docs">
                    <Button variant="secondary">
                      {/* Icon */}
                      <CirclePlay size={24} />
                      Watch Video
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:col-span-2">
            <img
              src="/assets/images/phone-mockup.png"
              alt="phone mockup"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
