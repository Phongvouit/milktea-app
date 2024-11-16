"use client";

interface ButtonProps {
  type?: "button" | "submit" | undefined;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className="
    inline-flex 
    items-center 
    justify-center 
    px-4 py-3 
    bg-[#f84525] 
    border 
    border-transparent 
    rounded-md 
    font-semibold 
    text-xs 
    text-white 
    uppercase 
    tracking-widest 
    hover:bg-red-800 
    focus:bg-gray-700 
    active:bg-gray-900 
    focus:outline-none 
    focus:ring-2 
    focus:ring-indigo-500 
    focus:ring-offset-2 
    transition 
    ease-in-out 
    duration-150"
    >
      {children}
    </button>
  );
};

export default Button;
