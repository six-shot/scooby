import { Button } from "../ui/button";

export function HeroCtaSection() {
  return (
    <section className="px-4 p-8 overflow-hidden -mt-[200px] md:px-8 lg:py-24 lg:px-12 lg:-mt-[400px] relative z-40">
      <div className="w-full max-w-[960px] mx-auto bg-[#0e0e0ecc]">
        <div className="w-full p-4 sm:p-6 md:p-12 rounded-lg border border-primary/10  gradient-bottom text-center space-y-6">
          <h2 className="text-[28px] leading-[36px] font-normal md:text-5xl md:leading-[56px] -tracking-[0.4px]">
            Who is Scooby?
          </h2>

          <p className="text-base text-text-sec font-light md:text-xl">
            Scooby is a Veteran VC and marketing expert who has invested in and
            helped grow over 200 projects. He is now transitioning into being an
            incubator.
          </p>

          <Button size={"lg"} className="pri-btn-hover" asChild>
            <a
              href=" https://t.me/scoobyincubates"
              target="_blank"
              rel="noreferrer,noopener"
            >
              Join Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
