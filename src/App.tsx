import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import FilterSection from "./components/FilterSection";

export default function App () {
  return (
    <div className='w-full min-h-screen h-full bg-zinc-200'>
      <Header />
      <main className='w-full flex flex-row max-w-screen-xl mx-auto pt-10 px-6 lg:px-0 lg:pt-10 pb-24 lg:pb-14'>
        <FilterSection />
        <MainSection />
      </main>
      <Footer />
    </div>
  )
}