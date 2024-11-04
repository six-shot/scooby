export function TalentCard({
  name,
  img,
  info,
  tags,
}: {
  name: string;
  img: string;
  info: string;
  tags: string[];
}) {
  return (
    <div
      className="relative p-4 bg-[#272729] border-2 border-[#272729] flex flex-col gap-4 rounded-lg"
      key={name}
    >
      <div className="flex gap-3">
        <img src={img} className="w-16 h-16 rounded-lg" />
        <div className="flex flex-col gap-1 items-start">
          <p className="font-bold text-lg -tracking-[0.4px]">{name}</p>
          <p className="font-light text-sm text-left">{info}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {tags.map((tag) => (
          <div
            className="bg-[#424242] py-1 px-2 rounded-3xl flex gap-2 items-center whitespace-nowrap truncate"
            key={tag}
          >
            {tag.includes("Top") || tag.includes("Recommended") ? (
              <img src={"/top-earner.webp"} className="w-5 h-5" />
            ) : null}
            <p className="font-normal text-xs">{tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
