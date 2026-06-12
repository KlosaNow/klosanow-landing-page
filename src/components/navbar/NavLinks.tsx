import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/data";

export const NavLinks: React.FC<NavLinkProps> = ({
  children,
  href,
  handleNavClick,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <Link
        href={href}
        onClick={handleNavClick}
        className={`transition-colors duration-200 hover:text-[var(--color-primary-50)] ${isActive ? "text-[var(--color-primary-50)]" : ""}`}
      >
        {children}
      </Link>
      <span
        className={`block h-1 w-1 rounded-full bg-[var(--color-primary-50)] transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};
