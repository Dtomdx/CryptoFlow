import { useNavigate } from "react-router-dom";

interface NavItemProps {
  label: string;
  href: string;
  onClick?: () => void;
  isMobile?: boolean;
}

const NavItem = ({ label, href, onClick, isMobile = false }: NavItemProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.();
    navigate(href);
  };
  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        className={`text-gray-300 hover:text-white block py-2`}
      >
        {label}
      </a>
    </li>
  );
};

export default NavItem;
