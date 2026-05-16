import Image from "next/image";

type MaxtronLogoProps = {
  size?: number;
  className?: string;
  priority?: boolean;
};

export function MaxtronLogo({ size = 40, className = "", priority = false }: MaxtronLogoProps) {
  return (
    <Image
      src="/maxtronlogo.svg"
      alt="Maxtron Flagship Solutions"
      width={size}
      height={size}
      className={className}
      priority={priority}
    />
  );
}
