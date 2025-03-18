import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import FilterSection from "./components/FilterSection";
import BackToTopButton from "./components/BackToTopButton";

export default function App () {
  return (
    <div className='w-full min-h-screen h-full bg-zinc-200 relative'>
      <Header />
      <main className='w-full flex flex-row max-w-screen-xl mx-auto p-6 lg:px-0 lg:pt-8 pb-24 lg:pb-18'>
        <FilterSection />
        <MainSection />
      </main>
      <BackToTopButton />
      <Footer />
    </div>
  )
}