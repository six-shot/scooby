import { Icons } from "../ui/icons";

const items = [
  "Early Snipers",
  "Bundled Launches",
  "Inexperienced Teams",
  "Non KYC'ed Teams",
  "Rugs",
  "No Marketing",
  "Sub-Par Projects",
  "Team Selling",
];
const secondSet = [
  "Inconsistent Design Team",
  "Incompetent Mods",
  "Smart Contract Vulnerabilities",
  "Non Audited Contracts",
  "Non Renounced Contracts",
  "Unsafe Deployer",
  "Unfair Tax Distribution",
];

export function RolesSection() {
  return (
    <section className="p-8 px-4 md:px-8 lg:px-12 lg:py-24 relative">
      <div className="mx-auto max-w-[960px] w-full space-y-4 text-center">
        <h3 className="text-[2rem] leading-[2.5rem] sm:text-5xl sm:leading-[56px] md:text-[4rem] md:leading-[4.5rem] -tracking-[2px]">
          Scobby fixes all these <br /> Issues
        </h3>

        <div className="space-y-14">
          {/* <p className="text-text-sec font-light text-base sm:text-xl text-center px-5">
            Find your next fractional hire in a fraction of the time
          </p> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between h-12 rounded-lg border border-primary/10 bg-[#0e0e0ecc] px-4 py-3"
                >
                  <p className="font-bold text-base">{item}</p>
                  <Icons.arrowRight />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {secondSet.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between h-12 rounded-lg border border-primary/10 bg-[#0e0e0ecc] px-4 py-3"
                >
                  <p className="font-bold text-base">{item}</p>
                  <Icons.arrowRight />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
