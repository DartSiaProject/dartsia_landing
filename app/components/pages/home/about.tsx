export default function About() {
  return (
    <section className="mb-12 py-8" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-8">
        {/* Experiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-24">
          <div className="">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 text-center md:text-start">
              Our 3 years of achievements in Blockchain ecosystem
            </h2>
            <p className="text-lg font-light text-center md:text-start">
              Present in the Blockchain industry for 3 years already, our
              development team has set up a set of software solutions to
              facilitate users' access to the different Blockchain networks.
            </p>
          </div>

          {/* Numbers */}
          <div className="">
            <div className="grid grid-cols-2 items-center justify-center gap-8">
              <div className="flex gap-x-2">
                <img src="/assets/icons/overview.svg" alt="downloads" />
                <div className="">
                  <h3 className="text-lg md:text-xl font-bold">100+</h3>
                  <p className="text-sm md:text-base font-light">Downloads per day</p>
                </div>
              </div>
              <div className="flex gap-x-2">
                <img src="/assets/icons/monitoring.svg" alt="downloads" />
                <div className="">
                  <h3 className="text-lg md:text-xl font-bold">20 000+</h3>
                  <p className="text-sm md:text-base font-light">Users</p>
                </div>
              </div>
              <div className="flex gap-x-2">
                <img src="/assets/icons/management.svg" alt="downloads" />
                <div className="">
                  <h3 className="text-lg md:text-xl font-bold">20+</h3>
                  <p className="text-sm md:text-base font-light">Customers</p>
                </div>
              </div>
              <div className="flex gap-x-2">
                <img src="/assets/icons/list.svg" alt="downloads" />
                <div className="">
                  <h3 className="text-lg md:text-xl font-bold">6</h3>
                  <p className="text-sm md:text-base font-light">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-center">
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 lg:mr-24 text-center md:text-start">
              Some Blockchains that have trusted us.
            </h2>
            <p className="text-lg font-light text-center md:text-start">
              Several projects have already trusted us and benefited from our
              expertise in application development.
            </p>
          </div>

          <div className="hidden lg:block">
            <img src="/assets/images/partners.svg" className="object-cover scale-3d" alt="Trusted blockchains" />
          </div>

          <div className="flex flex-wrap justify-center items-center mt-4 gap-4 lg:hidden">
            <img src="/assets/images/sia.svg" className="h-16" alt="Sia" />
            <img src="/assets/images/binance.svg" alt="Binance" />
            <img src="/assets/images/chainlink.svg" alt="chainlink" />
            <img src="/assets/images/filecoin.svg" alt="filecoin" />
            <img src="/assets/images/polkadot.svg" alt="polkadot" />
            <img src="/assets/images/tezos.svg" alt="tezos" />
            <img src="/assets/images/avalanche.svg" alt="avalanche" />
          </div>
        </div>
      </div>
    </section>
  );
}
