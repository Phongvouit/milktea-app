"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import clsx from "clsx";

interface InputProps {
  id: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  placeholder,
  required,
  register,
  errors,
  disabled,
}) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        autoComplete={id}
        disabled={disabled}
        placeholder={placeholder}
        {...register(id, { required })}
        className={clsx(
          `
        w-full 
        rounded-md 
        py-2.5 
        px-4 
        border 
        text-sm 
        outline-[#f84525]
        `,
          errors[id] && "focus:ring-rose-500",
          disabled && "opacity-50 cursor-default"
        )}
      />
    </div>
  );
};

export default Input;
