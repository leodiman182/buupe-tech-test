import {ButtonHTMLAttributes, ReactNode} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className='bg-primary hover:bg-secondary p-1 text-white duration-125 cursor-pointer rounded-md w-1/2 lg:max-w-24 button'
      { ...props }
    >
      { children }
    </button>
  );
}