import { VscTriangleRight } from 'react-icons/vsc'

export default function Hero() {
  return (
    <>
      <section className="relative flex items-center mt-[150px]">
        {/* Text */}
        <div className="flex flex-col gap-y-3 ">
          <h3 className="text-[#DF6951] font-bold tracking-wider">BEST DESTINATIONS AROUND THE WORLD</h3>
          <h1 className="text-[#181E4B] text-[76px] font-bold w-[545px] leading-none tracking-tight relative">
            Travel, enjoy and live a new and full life
            <img
              src="assets/img/hero-decor.png"
              alt=""
              className="absolute top-[75px] left-[200px] z-[-10]"
            />
          </h1>
          <p className="text-[#5E6282] flex flex-col my-5">
            Built Wicket longer admire do barton vanity itself do in it. <span>Preferred to sportsmen it engrossed listening. Park gate</span> sell they west hard for the.
          </p>
          {/* Button */}
          <div className="flex items-center gap-x-10">
            <button className="bg-[#F1A501] text-white px-5 py-2 rounded-lg shadow-xl shadow-gray font-semibold">Find out more</button>
            <button className="flex items-center gap-x-3 text-[#686D77] font-semibold">
              <i className="p-3 bg-[#DF6951] text-center rounded-full shadow-xl shadow-gray">
                <VscTriangleRight className="text-white" />
              </i>
              Play Demo
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="absolute right-0">
          <img
            src="assets/img/traveler.png"
            alt="traveler"
            className="w-[700px]"
          />
        </div>
      </section>
    </>
  )
}
