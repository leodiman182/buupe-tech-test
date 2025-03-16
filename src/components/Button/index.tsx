import {ButtonHTMLAttributes, ReactNode} from "react";
import './style.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return <button {...props} className='p-1 text-white duration-125 cursor-pointer rounded-md w-1/2 lg:max-w-24 button'>{children}</button>;
}