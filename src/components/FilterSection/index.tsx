export default function FilterSection() {
  // const [open, setOpen] = useState(false);
  //
  // const toggleDrawer = (newOpen: boolean) => () => {
  //   setOpen(newOpen);
  // };

  return (
    <>
      {/*<Drawer open={open} onClose={toggleDrawer(false)}>*/}
      {/*  Filtro*/}
      {/*</Drawer>*/}
    <aside className='w-1/6 hidden lg:block'>
      <div className='border-r border-gray-400 ty-8 h-full'>
        <h3 className='text-xl font-bold mb-8'>
          Filtros
        </h3>
        <div>
          <div className='hover:underline cursor-pointer hover:text-[#f83e87]' id=''>Abaixo de R$ 50,00</div>
          <div className='hover:underline cursor-pointer hover:text-[#f83e87]' id=''>Entre R$ 50,00 e R$ 100,00</div>
          <div className='hover:underline cursor-pointer hover:text-[#f83e87]' id=''>Acima de R$ 100,00</div>
        </div>
      </div>
    </aside>
    </>
  )
}