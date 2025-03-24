export default function About() {
    return (
        <section className="mb-12 py-8" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-8">
          {/* Experiences */}
          <div className="grid grid-cols-2 gap-8 items-center mb-24">
            <div className="">
              <h2 className="text-5xl font-bold mb-2">
                Our 3 years of achievements in Blockchain ecosystem
              </h2>
              <p className="text-lg font-light">
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
                    <h3 className="text-xl font-bold">100+</h3>
                    <p className="font-light">Downloads per day</p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <img src="/assets/icons/monitoring.svg" alt="downloads" />
                  <div className="">
                    <h3 className="text-xl font-bold">20 000+</h3>
                    <p className="font-light">Users</p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <img src="/assets/icons/management.svg" alt="downloads" />
                  <div className="">
                    <h3 className="text-xl font-bold">20+</h3>
                    <p className="font-light">Customers</p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <img src="/assets/icons/list.svg" alt="downloads" />
                  <div className="">
                    <h3 className="text-xl font-bold">6</h3>
                    <p className="font-light">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="">
              <h2 className="text-5xl font-bold mb-2 mr-24">
                Some Blockchains that have trusted us.
              </h2>
              <p className="text-lg font-light">
                Several projects have already trusted us and benefited from our
                expertise in application development.
              </p>
            </div>

            {/* Numbers */}
            <div className="">
              <img
                src="/assets/images/partners.svg"
                alt="Trusted blockchains"
              />
            </div>
          </div>
        </div>
      </section>
    );
}