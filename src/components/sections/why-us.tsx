import { Banner } from "../banner";
import { GradientButton } from "../ui/gradient-button";

export function WhyUsSection() {
  return (
    <section
      className="p-8 px-4 md:px-8 lg:px-12 lg:py-24 relative"
      id="why-us"
    >
      <div className="mx-auto max-w-[960px] w-full space-y-4 text-center">
        <h3 className="text-[2rem] leading-[2.5rem] sm:text-5xl sm:leading-[56px] md:text-[4rem] md:leading-[4.5rem] -tracking-[2px]">
          Why Scooby?
        </h3>

        <div className="space-y-12">
          <p className="text-text-sec font-light text-base sm:text-xl">
            Scooby has a great network, a 10+ YOE and really really cares about
            the community.
          </p>

          {/* talent discovery  */}
          <div className="flex flex-col min-[991px]:flex-row w-full border border-primary/10 p-3 sm:p-6 sm:gap-14 lg:gap-10 md:p-12 gap-6 rounded-lg justify-between bg-[#0e0e0ecc]">
            <div className="flex flex-col self-center h-full max-sm:p-3 text-left w-full">
              <header className="text-[28px] leading-[32px] sm:text-[2rem] sm:leading-[2.5rem] font-normal -tracking-[0.4px] lg:text-[2.5rem] lg:leading-[3rem] mb-2">
                Onboard the best influencer
              </header>
              <p className="max-w-[504px] font-normal w-full text-text-sec *:text-text-sec text-base mb-8">
                Tap into Scooby's vast network of 5,000+ influencers to connect
                with the best guy, perfectly matched to highlight your project's
                unique strengths.
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

            <div className="p-3 flex flex-col bg-[#1a1a1b] sm:py-6 sm:px-8 w-full rounded-lg relative backdrop-blur overflow-hidden">
              <img
                src="/why-us/onboard.png"
                alt="onboard"
                className="rounded-lg aspect-square"
              />
            </div>
          </div>

          {/* vetted talent */}
          <div className="flex flex-col min-[991px]:flex-row-reverse w-full border border-primary/10 p-3 sm:p-6 sm:gap-14 lg:gap-10 md:p-12 gap-6 rounded-lg justify-between bg-[#0e0e0ecc]">
            <div className="flex flex-col self-center h-full max-sm:p-3 text-left w-full">
              <header className="text-[28px] leading-[32px] sm:text-[2rem] sm:leading-[2.5rem] -tracking-[0.4px] lg:text-[2.5rem] lg:leading-[3rem] mb-2">
                Top talent with unique experience.
              </header>
              <p className="max-w-[504px] font-normal w-full text-text-sec *:text-text-sec text-base mb-8">
                We connect you with top designers, developers, and auditors,
                providing everything a project needs to thrive and maximize
                visibility.
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

            <div className="p-3 grid grid-cols-3 gap-4 sm:gap-6 bg-[#1a1a1b] sm:py-6 sm:px-8 h-[25rem] w-full rounded-lg relative backdrop-blur overflow-hidden">
              {Array(9)
                .fill(0)
                .map((_, i) => (
                  <div
                    className="max-sm:p-4 bg-[#1a1a1b] border border-primary/10 rounded-2xl grid place-items-center shadow-[0_0_16px_-1px_#0003] relative group duration-300 transition-all hover:border-primary cursor-pointer"
                    key={i}
                  >
                    <img
                      src={`/why-us/companies/${i + 1}.png`}
                      alt="Image"
                      className="sm:w-10 sm:h-10 md:w-16 md:h-16 saturate-0 group-hover:saturate-100"
                    />
                    <div className="absolute rounded-full w-1/2 h-1/2 mix-blend-overlay z-20 opacity-0 group-hover:opacity-100 gradient-hover" />
                  </div>
                ))}
            </div>
          </div>

          {/* search */}
          <div className="flex flex-col min-[991px]:flex-row w-full border border-primary/10 p-3 sm:p-6 sm:gap-14 lg:gap-10 md:p-12 gap-6 rounded-lg justify-between bg-[#0e0e0ecc]">
            <div className="flex flex-col self-center h-full max-sm:p-3 text-left w-full">
              <div className="mb-8 mr-auto w-full max-w-[390px]">
                <Banner
                  text="Join Scooby Alpha Community"
                  href="https://t.me/+ei9A-24s0Z4wZGZl"
                />
              </div>
              <header className="text-[28px] leading-[32px] sm:text-[2rem] sm:leading-[2.5rem] -tracking-[0.4px] lg:text-[2.5rem] lg:leading-[3rem] mb-2">
                Join Scooby's Community for Free
              </header>
              <p className="max-w-[504px] font-normal w-full text-text-sec *:text-text-sec text-base mb-8">
                Join the Scooby community and get whitelisted for future
                projects. It's free for the first 1000 members.
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

            <div className="p-3 bg-[#1a1a1b] sm:py-6 sm:px-8 h-[25rem] w-full rounded-lg relative backdrop-blur overflow-hidden">
              <img
                src="/why-us/whitelist.png"
                alt=""
                className="w-full h-full aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
