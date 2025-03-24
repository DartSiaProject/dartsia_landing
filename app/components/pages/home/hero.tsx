import { CirclePlay } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export default function Hero() {
    return (
        <section className="relative py-10 bg-[url(/assets/images/background.svg)] bg-cover bg-center bg-no-repeat mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
          <div className="grid grid-cols-5 justify-center items-center gap-8">
            <div className="col-span-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <h1 className="text-5xl font-bold mb-2">
                    The easiest way to access and monitor your Renterd Server
                  </h1>
                  <p className="text-lg">
                    Dartsia has been specifically designed to allow you to
                    display, configure and access a Renterd server on the Sia
                    network.
                  </p>
                  <div className="mt-4 flex gap-4">
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
            <div className="col-span-2">
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