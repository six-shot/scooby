const steps = [
  {
    title: "Anti-Rug Launches",
    content:
      "Fairlaunch designed with best practices, minimizing sniper impact to ensure a secure and equitable distribution for all participants in the community.",
  },
  {
    title: "Kyc'ed Teams",
    content:
      "We launch exclusively with KYC-verified teams to protect our investors and ensure a secure, trustworthy environment for a safe and successful launch.",
  },
  {
    title: "Top line marketing support",
    content:
      "Scooby knows everyone across the industry, including top marketers, VCs, and influencers, ensuring comprehensive support and exposure for projects.",
  },
];

function formatWords(input: string): string {
  const words = input.split(" ");

  if (words.length === 2) {
    return `${words[0]}<br/>${words[1]}`;
  } else if (words.length === 4) {
    return `${words[0]} ${words[1]}<br/>${words[2]} ${words[3]}`;
  } else {
    return input;
  }
}

export function StepsSection() {
  return (
    <section
      className="p-8 px-4 md:px-8 lg:px-12 lg:py-24 relative space-y-14"
      id="features"
    >
      <div className="max-w-[700px] mx-auto ">
        <h2 className="font-normal text-center text-[2rem] leading-[2.5rem] sm:text-5xl sm:leading-[56px] md:text-[4rem] md:leading-[4.5rem] -tracking-[2px]">
          Ensuring the Safest and Most Beneficial Launches for the Community
        </h2>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-12 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-background border border-primary/10 rounded-lg opacity-85 pt-12 px-6 pb-8 space-y-6 text-center relative"
          >
            <div className="absolute w-12 h-12 rounded-full -top-6 left-0 right-0 mx-auto bg-inherit border border-primary/10 flex items-center justify-center ">
              <span className="font-bold text-[24px] leading-[1px] font-mono">
                {index + 1}
              </span>
            </div>

            <div>
              {/* <header className="text-2xl font-bold">{step.title}</header> */}
              <header
                className="text-2xl font-bold"
                dangerouslySetInnerHTML={{
                  __html: formatWords(step.title),
                }}
              />
            </div>
            <p className="text-sm font-light">{step.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
