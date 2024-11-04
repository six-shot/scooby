import { GradientButton } from "../ui/gradient-button";

const features = [
  {
    title: "50% Revenue Shared",
    content:
      "50% of the revenue earned from the daily trading volume of tokens launched through Scooby is distributed to the Scooby Alpha members.",
    img: "/work/flat.webp",
  },
  {
    title: "30 Days",
    content:
      "Scooby generates revenue by charging a transaction fee on the trading volume of all launched tokens: 2% in the first 24 hours, followed by 1% for the next 30 days.",
    img: "/work/1099.webp",
  },
  {
    title: "Safest Web3 Launches",
    content:
      "Our security features ensure you're protected from hard rugs while providing you with opportunities to earn from the project!",
    img: "/work/assess.webp",
  },
];

export function WorkSection() {
  return (
    <section
      className="p-8 px-4 md:px-8 lg:px-12 lg:py-24 relative"
      id="benefits"
    >
      <div className="mx-auto max-w-[960px] w-full space-y-4 text-center">
        <h3 className="text-[2rem] leading-[2.5rem] sm:text-5xl sm:leading-[56px] md:text-[4rem] md:leading-[4.5rem] -tracking-[2px]">
          Work with Scooby
        </h3>

        <div className="space-y-14">
          <p className="text-text-sec font-light text-base sm:text-xl">
            Opportunities for Investors, Influencers, and Developers.
          </p>

          <div className="flex flex-col min-[991px]:flex-row w-full border border-primary/10 p-3 sm:p-6 sm:gap-14 lg:gap-10 md:p-12 gap-6 rounded-lg justify-between bg-[#0e0e0ecc]">
            <div className="flex flex-col self-center h-full max-sm:p-3 text-left w-full">
              <header className="text-[28px] leading-[32px] sm:text-[2rem] sm:leading-[2.5rem] font-normal -tracking-[0.4px] lg:text-[2.5rem] lg:leading-[3rem] mb-2">
                Free whitelist spots
              </header>
              <p className="max-w-[504px] font-normal w-full text-text-sec *:text-text-sec text-base mb-12">
                Join the Scooby Alpha Community free of charge—exclusive to the
                first 1,000 members!
              </p>

              <GradientButton size={"lg"} asChild>
                <a
                  href=" https://t.me/scoobyincubates"
                  target="_blank"
                  rel="noreferrer,noopener"
                >
                  Join Now
                </a>
              </GradientButton>
            </div>

            <div className="p-3 flex flex-col lg:min-w-[34rem] bg-[#1a1a1b] sm:py-6 sm:px-8  w-full rounded-lg relative backdrop-blur overflow-hidden">
              <img
                src="/work/work.jpg"
                className="w-full h-full aspect-square rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 px-6 md:px-8 gap-14">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-3">
                <header className="flex items-center md:flex-col justify-between md:gap-8">
                  <img
                    src={feature.img}
                    className="w-9 h-9 sm:h-11 sm:w-11 md:h-[72px] md:w-[72px]"
                  />
                  <div className="w-full">
                    <p className="sm:text-xl font-normal text-center">
                      {feature.title}
                    </p>
                  </div>
                </header>

                <p className="text-text-sec text-sm md:text-base">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
