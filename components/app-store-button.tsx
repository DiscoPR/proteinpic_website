import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type AppStoreButtonProps = {
  className?: string;
  theme?: "dark" | "light";
};

export function AppStoreButton({
  className,
  theme = "dark",
}: AppStoreButtonProps) {
  const isDark = theme === "dark";

  return (
    <a
      href={site.appStoreUrl}
      className={cn(
        "inline-flex items-center gap-3 rounded-xl px-4 py-2.5 transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
        isDark ? "bg-black text-white" : "bg-white text-navy",
        className,
      )}
      aria-label="Download Protein Pic on the App Store"
    >
      <AppleMark className={cn("h-7 w-7", isDark ? "text-white" : "text-navy")} />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-medium tracking-wide opacity-80">
          Download on the
        </span>
        <span className="text-[17px] font-semibold tracking-tight">
          App Store
        </span>
      </span>
    </a>
  );
}

function AppleMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M16.37 12.74c.03 3.23 2.83 4.31 2.86 4.32-.02.08-.45 1.53-1.47 3.03-.89 1.3-1.81 2.59-3.26 2.62-1.43.03-1.89-.85-3.53-.85-1.64 0-2.15.82-3.5.87-1.41.06-2.48-1.4-3.38-2.69-1.84-2.66-3.25-7.52-1.36-10.8 1.18-2.04 3.29-3.33 5.58-3.37 1.38-.03 2.69.93 3.53.93.84 0 2.42-1.15 4.08-.98.69.03 2.64.28 3.89 2.12-.1.06-2.32 1.36-2.44 4.1ZM14.7 5.16c.75-.9 1.25-2.16 1.11-3.41-1.08.04-2.38.72-3.15 1.62-.69.8-1.3 2.08-1.14 3.31 1.2.09 2.43-.61 3.18-1.52Z" />
    </svg>
  );
}
