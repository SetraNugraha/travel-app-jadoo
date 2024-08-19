interface Steps {
  icon: string
  color: string
  title: string
  desc: string
}

const steps: Steps[] = [
  {
    icon: 'step1.png',
    color: '#F0BB1F',
    title: 'Choose Destination',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
  },

  {
    icon: 'step2.png',
    color: '#F15A2B',
    title: 'Make Payment',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
  },

  {
    icon: 'step3.png',
    color: '#006380',
    title: 'Reach Airport on Selected Date',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
  },
]
export default function BookSteps() {
  return (
    <>
      <section className="relative">
        {/* header */}
        <div className="flex flex-col gap-y-3">
          <h3 className="font-semibold text-[#5E6282] text-[20px]">Easy and Fast</h3>
          <h1 className="text-5xl font-bold flex flex-col">
            Book Your Next Trip <span>In 3 Easy Steps</span>
          </h1>
        </div>

        <div>
          {/* 3 Steps */}
          <div className="flex flex-col items-start justify-start gap-y-10 mt-10 w-[400px]">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-x-3"
              >
                <div
                  className={`rounded-xl w-[75px] h-[45px] flex items-center justify-center`}
                  style={{ backgroundColor: step.color }}
                >
                  <img
                    src={`assets/img/${step.icon}`}
                    alt="step"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <h1 className="font-bold text-[#5E6282] ">{step.title}</h1>
                  <p className="text-[#5E6282] ">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Card  */}
          <div className="bg-white border border-slate-100 shadow-xl shadow-slate-200 inline-block p-6 rounded-3xl absolute top-[50px] left-[600px]">
            {/* Header */}
            <div>
              <img
                src="assets/img/traveler-girl.png"
                alt=""
              />
              <h1 className="font-semibold mt-4 mb-2 text-lg">Trip To Greece</h1>
              <p className="text-[#84829A]">14-29 June | by Robbin Jhon Doe</p>
            </div>

            {/* Button */}
            <div className="my-4 ml-3">
              <ul className="flex gap-x-3 items-center text-[#84829A]">
                <li className="bg-slate-200 p-3 rounded-full">
                  <a href="">
                    <img
                      src="assets/img/leaf.png"
                      alt=""
                    />
                  </a>
                </li>

                <li className="bg-slate-200 p-3 rounded-full">
                  <a href="">
                    <img
                      src="assets/img/maps.png"
                      alt=""
                    />
                  </a>
                </li>

                <li className="bg-slate-200 p-3 rounded-full">
                  <a href="">
                    <img
                      src="assets/img/paper-plane.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <img
                  src="assets/img/building.png"
                  alt=""
                />
                <p className="text-[#84829A]">24 people going</p>
              </div>
              <div>
                <img
                  src="assets/img/love.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
