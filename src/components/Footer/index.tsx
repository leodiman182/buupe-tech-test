export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className='bg-gradient-to-r from-[#f83e87] to-[#ffa68d] w-full text-center text-white py-2 fixed bottom-0 text-sm lg:text-base'>
      <h2 className='font-medium'>
        Desenvolvido por <a className='hover:underline cursor-pointer' href="https://portfolio-leodiman.vercel.app/" target='_blank'>
        Leonardo Diman
      </a> | {year}
      </h2>
    </footer>
  )
}