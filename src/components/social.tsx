import { social } from "@/lib/data";

const SocialMedia = ({ size }: { size: "sm" | "lg" }) => {
  return (
    <div className="flex items-center gap-x-2">
      {social.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          style={
            {
              "--hover-color": item.color,
            } as React.CSSProperties
          }
          className={`flex items-center justify-center rounded-full bg-foreground text-white transition-all hover:bg-[var(--hover-color)] ${
            size === "sm"
              ? "w-10 h-10"
              : "w-12 lg:w-14 h-12 lg:h-14 text-xl lg:text-2xl"
          }`}
        >
          <item.icon />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
