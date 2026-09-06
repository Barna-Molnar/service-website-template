import { config } from "@/config";

interface LogoProps {
  variant?: "full" | "compact";
  className?: string;
  onClick?: () => void;
}

export default function Logo({ variant = "full", className = "", onClick }: LogoProps) {
  const { name, logo } = config.brand;
  const hasLogo = logo.trim().length > 0;
  const showWordmark = variant === "full" || !hasLogo;

  return (
    <div
      className={`flex items-center gap-3 cursor-pointer ${className}`}
      onClick={onClick}
      aria-label={name}
    >
      {hasLogo && (
        <img
          src={logo}
          alt={name}
          className="h-8 w-8 object-contain"
        />
      )}
      {showWordmark && (
        <span className="text-xl font-bold tracking-tight leading-none text-foreground">
          {name}
        </span>
      )}
    </div>
  );
}
