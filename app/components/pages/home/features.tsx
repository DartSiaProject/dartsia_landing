export default function Features() {
    return (
        <section className="bg-background mb-12" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8 mb-8">
          {/* section title and subtitle */}
          <div className="px-8 flex flex-col justify-center items-center md:max-w-xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">
              A range of functionality
            </h2>
            <p className="text-lg text-center mb-8">
              The application has a range of features that will allow you to
              easily access the Sia Storage Network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Network */}
            <div className="flex flex-col items-center gap-y-4">
              <img
                src="/assets/icons/overview.svg"
                alt="Network Overview"
                className="w-8 h-8"
              />
              <h2 className="text-3xl text-center font-bold">Network overview</h2>
              <p className="text-lg text-center">
                Dartsia has been specifically designed to allow you to display,
                configure and access a Renterd server on the Sia network.
              </p>
            </div>

            {/* host config */}
            <div className="flex flex-col items-center gap-y-4">
              <img
                src="/assets/icons/host.svg"
                alt="Host Configuration"
                className="w-8 h-8"
              />
              <h2 className="text-3xl text-center font-bold">Host configuration</h2>
              <p className="text-lg text-center">
                Dartsia has been specifically designed to allow you to display,
                configure and access a Renterd server on the Sia network.
              </p>
            </div>

            {/* Renterd config */}
            <div className="flex flex-col items-center gap-y-4">
              <img
                src="/assets/icons/config.svg"
                alt="Renter Configuration"
                className="w-8 h-8"
              />
              <h2 className="text-3xl text-center font-bold">Renter configuration</h2>
              <p className="text-lg text-center">
                Dartsia has been specifically designed to allow you to display,
                configure and access a Renterd server on the Sia network.
              </p>
            </div>

            {/* Monitoring */}
            <div className="flex flex-col items-center gap-y-4">
              <img
                src="/assets/icons/monitoring.svg"
                alt="Monitoring"
                className="w-8 h-8"
              />
              <h2 className="text-3xl text-center font-bold">Renterd Monitoring</h2>
              <p className="text-lg text-center">
                Dartsia has been specifically designed to allow you to display,
                configure and access a Renterd server on the Sia network.
              </p>
            </div>

            {/* files management */}
            <div className="flex flex-col items-center gap-y-4">
              <img
                src="/assets/icons/management.svg"
                alt="Files Management"
                className="w-8 h-8"
              />
              <h2 className="text-3xl text-center font-bold">Files Management</h2>
              <p className="text-lg text-center">
                Dartsia has been specifically designed to allow you to display,
                configure and access a Renterd server on the Sia network.
              </p>
            </div>

            {/* File encryption */}
            <div className="flex flex-col items-center gap-y-4">
              <img
                src="/assets/icons/layers.svg"
                alt="File Encryption"
                className="w-8 h-8"
              />
              <h2 className="text-3xl text-center font-bold">File Encryption</h2>
              <p className="text-lg text-center">
                Dartsia has been specifically designed to allow you to display,
                configure and access a Renterd server on the Sia network.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}