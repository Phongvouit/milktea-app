"use client";

import Link from "next/link";
import clsx from "clsx";

interface UserMenuItemProps {
  label: string;
  icon: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const UserMenuItem: React.FC<UserMenuItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <Link
      href={href}
      onClick={handleClick}
      className={clsx(
        `
        flex 
      cursor-pointer 
      items-center 
      py-2 
      px-4 
      text-sm 
      font-medium 
      text-gray-600 
      outline-none 
      transition-all 
      duration-100 
      ease-in-out 
      hover:border-l-4 
      hover:border-l-green-800 
      hover:text-green-800
      `,
        active && "border-l-4 border-l-green-800 text-green-800"
      )}
    >
      <Icon size={20} className="mr-4 align-middle" />
      {label}
    </Link>
  );
};

export default UserMenuItem;
