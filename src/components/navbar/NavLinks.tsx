import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/data";
import { activeLinkIndicatorImg } from "@/assets";

export const NavLinks: React.FC<NavLinkProps> = ({
  children,
  href,
  handleNavClick,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div className="flex flex-col justify-center items-center">
      <Link href={href} onClick={handleNavClick}>
        {children}
      </Link>
      {isActive ? (
        <Image
          src={activeLinkIndicatorImg}
          alt="isActive"
          width={15}
          height={15}
          priority
        />
      ) : (
        ""
      )}
    </div>
  );
};
