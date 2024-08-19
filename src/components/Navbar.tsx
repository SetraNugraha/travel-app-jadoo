import { MdKeyboardArrowDown } from 'react-icons/md'

export default function Navbar() {
  return (
    <>
      <nav className="">
        <section className="flex justify-between items-center">
          {/* Logo */}
          <div className="">
            <a href="">
              <img
                src="assets/img/logo.png"
                alt=""
              />
            </a>
          </div>

          {/* Container Menu & Auth */}
          <div className="w-[73%] flex justify-between items-center ">
            {/* Menu */}
            <div className="">
              <ul className="font-semibold flex justify-between items-center gap-x-20">
                <li>
                  <a href="">Destinations</a>
                </li>
                <li>
                  <a href="">Hotels</a>
                </li>
                <li>
                  <a href="">Flights</a>
                </li>
                <li>
                  <a href="">Bookings</a>
                </li>
              </ul>
            </div>

            {/* Auth */}
            <div className="mr-20">
              <ul className="font-semibold flex justify-between items-center gap-x-10">
                <li>
                  <button>Login</button>
                </li>
                <li className="px-4 py-1 border-[0.5px] border-black rounded-lg">
                  <button>Sign up</button>
                </li>
                <li>
                  <button className="flex items-center gap-x-2">
                    EN
                    <i>
                      <MdKeyboardArrowDown />
                    </i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </nav>
    </>
  )
}
