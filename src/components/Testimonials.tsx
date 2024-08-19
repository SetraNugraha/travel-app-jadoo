export default function Testimonials() {
  return (
    <>
      <section className="flex justify-between">
        {/* header */}
        <div className="flex flex-col gap-y-3">
          <h3 className="font-semibold text-[#5E6282] text-[20px]">TESTIMONIALS</h3>
          <h1 className="text-5xl font-bold flex flex-col">
            What People Say <span>About Us.</span>
          </h1>
        </div>

        <div className="relative">
          {/* Card */}
          <div className="relative bg-white border border-slate-100 w-[540px] p-7 rounded-2xl shadow-xl shadow-grey-200 mr-[100px]">
            <img
              src="assets/img/testimonials-people.png"
              alt=""
              className="absolute top-[-35px] left-[-35px]"
            />
            <p className="text-[#5E6282] font-semibold text-[18px] tracking-wider leading-loose">“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>

            {/* User */}
            <div className="mt-10">
              <h1 className="text-[#5E6282] font-bold text-[20px]">Mike Taylor</h1>
              <p className="text-[#5E6282] text-[16px]">Lahore, Pakistan</p>
            </div>

            {/* User 2 */}
            <div className="absolute z-[-10] top-[110px] left-[30px] border border-slate-200 w-[540px] p-7 rounded-2xl opacity-90">
              <p className="text-[#5E6282] font-semibold text-[18px] tracking-wider leading-loose mb-6">
                “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
              </p>
              <div className="">
                <h1 className="text-[#5E6282] font-bold text-[20px]">Chris Thomas</h1>
                <p className="text-[#5E6282] text-[16px]">CEO of Red Button</p>
              </div>
            </div>
          </div>

          {/* Button Arrow */}
          <div className="absolute right-[0px] top-[100px] flex flex-col gap-y-[40px]">
            <button>
              <i>
                <img
                  src="assets/img/arrow-up.png"
                  alt=""
                  className="w-[20px]"
                />
              </i>
            </button>
            <button>
              <i>
                <img
                  src="assets/img/arrow-down.png"
                  alt=""
                  className="w-[20px]"
                />
              </i>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
