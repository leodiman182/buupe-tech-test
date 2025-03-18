import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {footerComponent, githubLink, linkedinLink} from "../../utils/testid-list.ts";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer
      className='bg-gradient-to-r from-primary
       to-secondary w-full text-center text-white py-2 lg:py-3
        fixed bottom-0 lg:text-base flex flex-col gap-2 lg:gap-0 lg:flex-row items-center justify-between px-8'
      data-testid={ footerComponent }
    >
      <h2 className='font-medium'>
        Desenvolvido por{' '}
        <a
          className='hover:underline cursor-pointer'
          href='https://portfolio-leodiman.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Leonardo Diman
        </a>{' '}
        | {year}
      </h2>
      <div className='flex flex-row items-center justify-center gap-4'>
        <a data-testid={ linkedinLink } href='https://www.linkedin.com/in/leonardodiman/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className='hover:scale-110 hover:shadow-md duration-110' size={25} />
        </a>
        <a data-testid={ githubLink } href='https://github.com/leodiman182' target='_blank' rel='noopener noreferrer'>
          <FaGithub className='hover:scale-110 hover:shadow-md duration-110' size={25} />
        </a>
      </div>
    </footer>
  );
}
