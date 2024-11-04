import { Banner } from "../banner";
import { Orbits } from "../orbits/orbits";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="px-6 sm:px-12 relative h-[920px] sm:h-[1000px] md:h-[1300px] lg:h-[1400px] overflow-hidden z-20">
      <Banner text="First 1000 Members can join Scooby Alpha for free." />

      <div className="max-w-[960px] mx-auto space-y-8 text-center ">
        <h1 className="font-black mt-6 text-[52px] leading-[48px] sm:text-7xl md:text-8xl -tracking-[0.4px]">
          Web 3 Incubator & Launchpad
        </h1>

        <div className="max-w-[700px] mx-auto">
          <p className="text-text-sec mx text-base sm:text-xl font-light [text-shadow:0_2px_2px_#07070766]">
            Scooby is a Web3 incubator that carefully selects top teams from its
            network, offering a secure, KYC-verified launch to the community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-96 sm:gap-6 mx-auto max-sm:py-6">
          <a
            href="https://t.me/cryptoscooby"
            target="_blank"
            rel="noreferrer,noopener"
          >
            <Button
              className="sec-btn-hover hover:bg-[#ffffff0d]"
              variant={"secondary"}
              size={"lg"}
            >
              Talk to us
            </Button>
          </a>
          <a
            href=" https://t.me/+ei9A-24s0Z4wZGZl"
            target="_blank"
            rel="noreferrer,noopener"
          >
            <Button className="pri-btn-hover" size={"lg"}>
              Join Alpha Private
            </Button>
          </a>
        </div>
      </div>
      <Orbits />
    </section>
  );
}
