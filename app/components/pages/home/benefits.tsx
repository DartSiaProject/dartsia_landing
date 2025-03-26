export default function Benefits() {
  return (
    <section className="bg-teal-200 mb-12 py-8" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-10 gap-4">
          <div className="relative flex flex-col gap-y-4">
            <blockquote className="relative">
              <img
                src="/assets/icons/quote.svg"
                className="absolute -top-12 -start-8 h-24 w-24"
              />
              <div className="relative z-10 mx-6">
                <h2 className="text-gray-800 text-3xl dark:text-white font-bold">
                  Sia using Key Benefits
                </h2>
              </div>

              <div className="mt-4 ml-6 md:mr-10">
                <p className="text-gray-500">
                  The Sia blockchain offers a multitude of advantages over
                  traditional cloud storage solutions. Here is a summary of the
                  main benefits:
                </p>
              </div>
            </blockquote>

            {/* Card */}
            <div className="bg-background p-4 md:p-8 md:ml-20 rounded-lg shadow-lg">
              <div className="flex gap-x-2 mb-4 items-center">
                <img
                  src="/assets/icons/lock.svg"
                  className="h-8"
                  alt="Censorship"
                />
                <h3 className="font-bold">Censorship Resistance</h3>
              </div>
              <div className="font-light">
                Data is distributed across a vast network of independent nodes.
                This redundancy significantly minimizes the risk of data loss
                due to single-point failures or attacks targeting a centralized
                server.
              </div>
            </div>
          </div>

          <div className="py-10">
            {/* Card */}
            <div className="bg-background p-4 md:p-8 md:mr-20 mb-8 rounded-lg shadow-lg">
              <div className="flex gap-x-2 mb-4 items-center">
                <img
                  src="/assets/icons/lock.svg"
                  className="h-8"
                  alt="Censorship"
                />
                <h3 className="font-bold">Cost-Effectiveness</h3>
              </div>
              <div className="font-light">
                Sia leverages unused hard drive space around the world to create
                a decentralized storage marketplace. This makes it a more
                cost-effective option than traditional cloud storage providers.
              </div>
            </div>

            {/* Card */}
            <div className="bg-background p-4 md:p-8 md:mr-20 mb-8 rounded-lg shadow-lg">
              <div className="flex gap-x-2 mb-4 items-center">
                <img
                  src="/assets/icons/lock.svg"
                  className="h-8"
                  alt="Censorship"
                />
                <h3 className="font-bold">Privacy & Security</h3>
              </div>
              <div className="font-light">
                Siacoin employs advanced encryption techniques to safeguard data
                both at rest and in transit. This ensures the confidentiality
                and integrity of your stored information.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
