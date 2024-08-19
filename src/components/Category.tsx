export default function Category() {
  return (
    <>
      <section>
        {/* Title */}
        <div className="flex flex-col items-center justify-center gap-y-3">
          <h3 className="text-[#5E6282] font-semibold">CATEGORY</h3>
          <h1 className="text-[#14183E] font-bold text-5xl">We Offer Best Services</h1>
        </div>

        {/* Container Card */}
        <div className="relative grid grid-cols-4 gap-5 mt-20 place-items-center">
          {/* Card */}
          <div className="w-[70%] text-center flex flex-col items-center justify-center gap-y-2 p-7 ">
            <img
              src="assets/img/weather.png"
              alt=""
            />
            <h1 className="font-semibold">Calculated Weather</h1>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>

          {/* Card */}
          <div className="relative w-[70%] bg-white text-center flex flex-col items-center justify-center gap-y-2   p-7 rounded-[36px] shadow-md shadow-grey">
            <img
              src="assets/img/flights.png"
              alt=""
              className="mt-[-50px]"
            />
            <div className="mt-[-28px]">
              <h1 className="font-semibold">Best Flights</h1>
              <p className="mt-1">Engrossed listening. Park gate sell they west hard for the.</p>
            </div>
          </div>
          <div className="absolute w-[100px] h-[100px] bg-[#DF6951] rounded-tl-[30px] rounded-br-[10px] left-[340px] top-[170px] z-[-10]"></div>

          {/* Card */}
          <div className="w-[70%] text-center flex flex-col items-center justify-center gap-y-2 p-7">
            <img
              src="assets/img/events.png"
              alt=""
            />
            <h1 className="font-semibold">Local Events</h1>
            <p>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
          </div>

          {/* Card */}
          <div className="w-[70%] text-center flex flex-col items-center justify-center gap-y-2 p-7">
            <img
              src="assets/img/customization.png"
              alt=""
            />
            <h1 className="font-semibold">Customization</h1>
            <p>We deliver outsourced aviation services for military customers</p>
          </div>
        </div>
      </section>
    </>
  )
}
