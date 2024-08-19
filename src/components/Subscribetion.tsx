import { useState } from 'react'

export default function Subscribetion() {
  const [emailValue, setEmailValue] = useState('')

  return (
    <>
      <section>
        <div className="relative">
          <img
            src="assets/img/bg-subs.png"
            alt=""
            className="mx-auto object-cover"
          />
          <img
            src="assets/img/decor-subs.png"
            alt=""
            className="absolute top-[-20px] right-[-10px]"
          />

          {/* Form Subs */}
          <form
            action=""
            className="absolute top-[70px] left-[300px] flex flex-col items-center gap-x-3"
          >
            <h1 className="flex flex-col leading-loose font-bold text-4xl text-center text-[#5E6282]">
              Subscribe to get information, latest news and <span>other interesting offers about Jadoo</span>
            </h1>
            <div className="relative flex items-center gap-x-3 mt-5">
              <input
                type="text"
                name="subs"
                id="subs"
                onChange={(e) => setEmailValue(e.target.value)}
                className="w-[420px] h-[70px] rounded-xl border border-slate-100 shadow-xl shadow-slate-200 px-[60px] text-slate-600 text-xl font-semibold"
              />
              <label
                htmlFor="subs"
                className={`absolute top-[25px] left-[25px] flex items-center gap-x-3 font-semibold text-slate-500`}
              >
                <i>
                  <img
                    src="assets/img/email.png"
                    alt=""
                    className={`${emailValue ? 'mt-1' : ''}`}
                  />
                </i>
                <span className={`${emailValue ? 'hidden' : ''}`}>Your Email</span>
              </label>
              <button className="px-10 py-5 rounded-xl bg-[#FF7D68] text-white font-semibold shadow-xl shadow-slate-300 hover:opacity-70">Subscribe</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
