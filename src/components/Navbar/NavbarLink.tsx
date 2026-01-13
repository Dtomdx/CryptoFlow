import type { NavItem } from "@/types/navigation";
import { Link } from "react-router-dom";

interface NavbarLinkProps extends NavItem {
  onClick?: () => void;
  isActive?: boolean;
  variant?: "desktop" | "mobile";
}
const NavbarLink = ({
  label,
  href,
  external,
  onClick,
  isActive = false,
  variant = "desktop",
  isCTA = false,
}: NavbarLinkProps) => {
  const baseStyles = "transition-colors duration-200 font-medium";
  const variantStyles = {
    desktop: `px-3 py-2 rounded-md text-sm ${
      isActive
        ? "bg-gray-900 text-white"
        : "text-gray-300 hover:text-white hover:bg-gray-800"
    }`,
    mobile: `block px-3 py-3 text-base ${
      isActive
        ? "bg-gray-900 text-white"
        : "text-gray-300 hover:text-white hover:bg-gray-800"
    }`,
  };

  const ctaStyles = isCTA
    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl"
    : "";

  return (
    <Link
      to={href}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${ctaStyles}`}
    >
      {label}
    </Link>
  );
};

export default NavbarLink;
