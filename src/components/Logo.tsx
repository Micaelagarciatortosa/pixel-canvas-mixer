export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <span
        aria-hidden="true"
        className="relative grid size-6 shrink-0 place-items-center rounded-lg bg-volt glow-volt sm:size-7"
      >
        <span className="block h-[2px] w-3.5 -rotate-45 rounded-full bg-ink" />
        <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-ink" />
      </span>
      <span className="whitespace-nowrap font-display text-[0.95rem] font-semibold tracking-tight text-bone sm:text-lg">
        Empower Yourself
      </span>
    </span>
  );
}
