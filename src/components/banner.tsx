export function Banner({ text, href = "#" }: { text: string; href?: string }) {
  return (
    <a
      href={href}
      className="w-full md:max-w-[30rem] mx-auto flex text-primary text-xs sm:text-sm md:text-base rounded-full border border-primary/10 py-2 px-3 text-center hover:shadow-[0_0_12px_#d850fc66] transition-shadow duration-500 ease-in-out bg-background items-center justify-center gap-1"
    >
      <span className="bg-gradient-to-r from-[#d850fc] to-[#f192e5] bg-clip-text text-transparent font-bold">
        NEW
      </span>
      <span className="opacity-20">•</span> {text}
    </a>
  );
}
