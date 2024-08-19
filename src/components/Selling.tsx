import { IoNavigate } from 'react-icons/io5'

export default function Selling() {
  return (
    <>
      <section>
        {/* Title */}
        <div className="flex flex-col justify-center items-center gap-y-3">
          <h3 className="font-semibold text-[#5E6282]">Top Selling</h3>
          <h1 className="text-[#14183E] font-bold text-5xl">Top Destinations</h1>
        </div>

        <div className='mt-[100px] flex items-center justify-between'>
        {/* Card */}
          <div className="relative">
            <img
              src="assets/img/rome.png"
              alt=""
            />

            {/* place & price */}
            <div className="absolute flex flex-col gap-y-3 bg-white w-[314px] h-[100px] bottom-0 p-5 rounded-b-[24px] shadow-md shadow-grey">
              <div className="flex justify-between items-center font-semibold text-[#5E6282]">
                <p>Rome, Italy</p>
                <p>$5,42K</p>
              </div>

              {/* Estimation */}
              <p className="flex items-center gap-x-3 font-semibold text-[#5E6282]">
                <i>
                  <IoNavigate />
                </i>
                10 Days Trip
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="relative">
            <img
              src="assets/img/london.jpg"
              alt=""
            />

            {/* place & price */}
            <div className="absolute flex flex-col gap-y-3 bg-white w-[314px] h-[100px] bottom-0 p-5 rounded-b-[24px] shadow-md shadow-grey">
              <div className="flex justify-between items-center font-semibold text-[#5E6282]">
                <p>London, UK</p>
                <p>$4,2K</p>
              </div>

              {/* Estimation */}
              <p className="flex items-center gap-x-3 font-semibold text-[#5E6282]">
                <i>
                  <IoNavigate />
                </i>
                12 Days Trip
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="relative">
            <img
              src="assets/img/europe.png"
              alt=""
            />

            {/* place & price */}
            <div className="absolute flex flex-col gap-y-3 bg-white w-[314px] h-[100px] bottom-0 p-5 rounded-b-[24px] shadow-md shadow-grey">
              <div className="flex justify-between items-center font-semibold text-[#5E6282]">
                <p>Full Europe</p>
                <p>$15K</p>
              </div>

              {/* Estimation */}
              <p className="flex items-center gap-x-3 font-semibold text-[#5E6282]">
                <i>
                  <IoNavigate />
                </i>
                28 Days Trip
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
