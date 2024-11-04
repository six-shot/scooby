import { GradientButton } from "../ui/gradient-button";
import { Icons } from "../ui/icons";

export function HiringSection() {
  return (
    <section
      className="p-8 px-4 md:px-8 lg:px-12 lg:py-24 relative"
      id="#join-scooby"
    >
      <div className="mx-auto max-w-[960px] w-full space-y-4 text-center">
        <h3 className="text-[2rem] leading-[2.5rem] sm:text-5xl sm:leading-[56px] md:text-[4rem] md:leading-[4.5rem] -tracking-[2px]">
          Join Scooby's <br />
          Alpha Comunity
        </h3>

        <div className="space-y-14">
          <p className="text-text-sec font-light text-base sm:text-xl">
            Join the community to be eligible for <br /> Whitelisting and
            Revenue Share
          </p>

          {/* seamless path to direct hire */}
          <div className="flex flex-col min-[991px]:flex-row-reverse w-full border border-primary/10 p-3 sm:p-6 sm:gap-14 lg:gap-10 md:p-12 gap-6 rounded-lg justify-between bg-[#0e0e0ecc]">
            <div className="flex flex-col self-center h-full max-sm:p-3 text-left w-full">
              <header className="text-[28px] leading-[32px] sm:text-[2rem] sm:leading-[2.5rem] font-normal -tracking-[0.4px] lg:text-[2.5rem] lg:leading-[3rem] mb-2">
                Pre-Launch Advisory
              </header>
              <p className="max-w-[504px] font-normal w-full text-text-sec *:text-text-sec text-base mb-12">
                Business Development, Tokenomics, Token Usecase, Marketing
                advisory offered. Announcement in my Scooby Alpha group for the
                existing members to be whitelisted.
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

            <div className="p-3 flex flex-col bg-[#1a1a1b] sm:py-6 sm:px-8 h-fit self-center gap-6 w-full rounded-lg relative backdrop-blur overflow-hidden">
              <a
                href=" https://t.me/scoobyincubates"
                target="_blank"
                rel="noreferrer,noopener"
              >
                <img
                  src="/pre-launch.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </div>

          {/* hire anywhere */}
          <div className="flex flex-col min-[991px]:flex-row w-full border border-primary/10 p-3 sm:p-6 sm:gap-14 lg:gap-10 md:p-12 gap-6 rounded-lg justify-between bg-[#0e0e0ecc]">
            <div className="flex flex-col self-center h-full max-sm:p-3 text-left w-full">
              <header className="text-[28px] leading-[32px] sm:text-[2rem] sm:leading-[2.5rem] font-normal -tracking-[0.4px] lg:text-[2.5rem] lg:leading-[3rem] mb-2">
                Launch Strategy
              </header>
              <p className="max-w-[504px] font-normal w-full text-text-sec *:text-text-sec text-base mb-8">
                Fair-Launch with minimal sniper impact. Safe Audited CA
                deployed/renounced. Liquidity Added and Locked and shared in my
                network to create Hype
              </p>

              <GradientButton size={"lg"} asChild>
                <a
                  href="https://t.me/scoobyincubates"
                  target="_blank"
                  rel="noreferrer,noopener"
                >
                  Join Now
                </a>
              </GradientButton>
            </div>

            <div className="p-3 bg-[#1a1a1b] h-[24rem] w-full rounded-lg relative backdrop-blur overflow-hidden">
              <img src={`/launch.png`} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* referrals */}

          <div className="flex flex-col min-[991px]:flex-row w-full border border-primary/10 p-3 sm:p-6 sm:gap-14 lg:gap-10 md:p-12 gap-6 rounded-lg justify-between bg-[#0e0e0ecc] h-[426px] md:h-[338px] relative overflow-hidden">
            <div className="flex flex-col lg:self-center h-full max-sm:p-3 text-left w-full max-w-[360px]">
              <header className="text-[28px] leading-[32px] sm:text-[2rem] sm:leading-[2.5rem] font-normal -tracking-[0.4px] lg:text-[2.5rem] lg:leading-[3rem] mb-2">
                Post-Launch
              </header>
              <p className=" font-normal w-full text-text-sec *:text-text-sec text-base mb-8">
                Marketing support/advisory. Business development advice,
                Opinions on Kols
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

            <div className="absolute bottom-0 right-0 w-[213px] h-[183px] md:h-[273px] md:w-[380px]">
              <Icons.rocket className=" w-full h-full mx-auto" />
            </div>
            <Icons.rocketSmoke className="right-0 absolute bottom-0 w-[213px] h-[183px] md:h-[273px] md:w-[380px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
