import { Link } from "react-router";

export default function Download() {
  return (
    <section className="bg-[#1DB5BE]" id="download">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 items-center lg:items-stretch">
          <div className="my-12 py-12">
            <h2 className="text-5xl font-bold mb-2">
              Manage your renterd Server from your mobile
            </h2>
            <p className="text-lg font-light">
              Download the Renterd mobile app from the App Store or Playstore
              and easily manage your Renterd servers and have all the data on
              the status of the Sia network from your mobile device.
            </p>

            <div className="mt-8 ">
              <p className="text-lg font-semibold">Get the App</p>
              <div className="flex gap-x-4">
                <Link to={"/"}>
                  <img
                    className="h-12 w-auto"
                    src="/assets/icons/play-store.svg"
                    alt="Logo"
                  />
                </Link>
                <Link to={"/"}>
                  <img
                    className="h-12 w-auto"
                    src="/assets/icons/app-store.svg"
                    alt="Logo"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Mockups */}
          <div className="hidden md:block lg:hidden">
            <img src="/assets/images/phone-mockup.png" alt="Mobile app" />
          </div>
          <div className="hidden lg:grid lg:grid-cols-2">
            <div className="relative overflow-hidden">
              <div className="absolute -top-16">
                <img
                  src="/assets/images/phone-mockup.png"
                  className="object-contain"
                  alt="Mobile app"
                />
              </div>
            </div>
            <div className="relative overflow-hidden">
              <div className="absolute -bottom-24">
                <img src="/assets/images/phone-mockup.png" alt="Mobile app" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
