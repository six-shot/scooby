import { GradientButton } from "../ui/gradient-button";
import { Icons } from "../ui/icons";

export function FooterCTASection() {
  return (
    <section className="pt-8 lg:px-12 lg:pt-24 relative overflow-hidden">
      {/* <div className="w-full mx-auto h-full space-y-10 pt-6 pb-44 sm:pt-28 sm:pb-[322px] lg:pb-56 relative px-4 md:px-8">
        <h6 className="font-black text-5xl text-center sm:text-7xl z-30">
          Find talent on <br />
          your terms
        </h6>

        <div className="w-36 mx-auto relative z-30">
          <GradientButton className="mx-auto" asChild>
            <a
              href="https://t.me/+ei9A-24s0Z4wZGZl"
              target="_blank"
              rel="noreferrer,noopener"
            >
              Join Now
            </a>
          </GradientButton>
        </div>

        <img
          src={"/orbits/0.svg"}
          className="w-60 left-1/2 -translate-x-1/2 h-60 absolute -bottom-32 z-20 "
        />
        <img
          src={"/gradient.webp"}
          className="min-w-[600px] h-[600px] left-1/2 -translate-x-1/2 absolute -bottom-[300px] z-10 "
        />
      </div> */}

      <div className="bg-background max-md:px-4 pt-16 max-lg:p-8 relative z-30 w-full lg:py-24 space-y-12 wrapper">
        <div className="flex sm:items-center gap-4 justify-between flex-col sm:flex-row ">
          <a href="/" className="flex items-center gap-3">
            {/* <Icons.logo /> */}
            <img
              src="/logo.png"
              alt=""
              className="w-10 h-10 md:w-12 md:h-12  rounded-full"
            />
            <span className="font-semibold text-white text-base md:text-2xl tracking-[0.24px]">
              Scooby
            </span>
          </a>

          <div className="bg-primary/10 h-px w-full hidden sm:flex" />
          <div className="flex items-center gap-4">
            <a href="#">
              <Icons.twitter className="w-8 h-8" />
            </a>
            <a
              href="https://t.me/scoobyincubates"
              target="_blank"
              rel="noreferrer,noopener"
            >
              <Icons.telegram className="w-8 h-8" />
            </a>
            {/* <a href="#">
              <Icons.linkedIn className="w-8 h-8" />
            </a> */}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 [grid-rows:auto_auto]">
          <p className="self-start [grid-area:span_1_/_span_2_/_span_1_/_span_2] text-2xl font-normal">
            Scobby empowers your <br /> Launch and Investment.
          </p>

          <ul className="[grid-area:span_1_/span_1_/_span_1_/_span_1] space-y-3 *:block *:text-base">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#why-us">Why Scooby</a>
            </li>
            <li>
              <a href="#benefits">Benefits</a>
            </li>
          </ul>

          <ul className="[grid-area:span_1_/span_1_/_span_1_/_span_1] space-y-3 *:block *:text-base *:font-normal">
            <li>
              <a href="">Frequently Asked Questions</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Sitemap</a>
            </li>
          </ul>

          <div className="self-end lg:-mt-16 [grid-area:span_1_/_span_2_/_span_1_/_span_2] space-y-1 *:text-sm *:md:text-xs">
            <p>© {new Date().getFullYear()} Scooby. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <a href="">Privacy Policy</a>
              <span> • </span>
              <a href="">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
