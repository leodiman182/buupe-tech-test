import {FaGithub, FaLinkedin} from "react-icons/fa";
import {Link} from "react-router";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className='bg-gradient-to-r from-[#f83e87] to-[#ffa68d] w-full text-center text-white py-2 lg:py-3 fixed bottom-0 text-sm lg:text-base flex flex-row items-center justify-between px-8'>
      <h2 className='font-medium'>
        Desenvolvido por <a className='hover:underline cursor-pointer' href="https://portfolio-leodiman.vercel.app/" target='_blank'>
          Leonardo Diman
        </a> | {year}
      </h2>
      <div className='flex flex-row items-center justify-center gap-4'>
        <Link to='https://www.linkedin.com/in/leonardodiman/' target='_blank'>
          <FaLinkedin className='hover:scale-110 hover:shadow-md duration-110' size={25} />
        </Link>
        <Link to='https://github.com/leodiman182' target='_blank'>
          <FaGithub className='hover:scale-110 hover:shadow-md duration-110' size={25}  />
        </Link>
      </div>
    </footer>
  )
}