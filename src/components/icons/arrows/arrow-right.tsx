import clsx from "clsx";

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={clsx("w-8 h-8", className)}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.75 6.75L19.25 12L13.75 17.25"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19 12H4.75"
      ></path>
    </svg>
  );
}
