import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import Selling from './components/Selling'
import BookSteps from './components/BookSteps'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Sponsors from './components/Sponsors'
import Subscribetion from './components/Subscribetion'

export default function App() {
  return (
    <>
      <header className="relative mt-10">
        <img
          src="assets/img/hero-bg.png"
          alt="decore"
          className="absolute right-0 top-[-40px] z-[-10]"
        />
        <Navbar />
        <Hero />
      </header>

      <main className="">
        <div className="mt-[230px]">
          <Category />
        </div>

        <div className="mt-[230px]">
          <Selling />
        </div>

        <div className="mt-[230px]">
          <BookSteps />
        </div>

        <div className="mt-[230px]">
          <Testimonials />
        </div>

        <div className="mt-[200px]">
          <Sponsors />
        </div>

        <div className="mt-[200px]">
          <Subscribetion />
        </div>
      </main>

      <footer className="mt-[230px]">
        <Footer />
      </footer>
    </>
  )
}
