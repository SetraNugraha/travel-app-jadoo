interface MenuItem {
  title: string
  path: string
}

interface FooterMenu {
  head: string
  menu: MenuItem[]
}

export default function Footer() {
  const footerMenus: FooterMenu[] = [
    {
      head: 'Company',
      menu: [
        {
          title: 'About',
          path: '',
        },
        {
          title: 'Careers',
          path: '',
        },
        {
          title: 'Mobile',
          path: '',
        },
      ],
    },

    {
      head: 'Contact',
      menu: [
        {
          title: 'Help/FAQ',
          path: '',
        },
        {
          title: 'Press',
          path: '',
        },
        {
          title: 'Affiliates',
          path: '',
        },
      ],
    },

    {
      head: 'More',
      menu: [
        {
          title: 'Airlinefees',
          path: '',
        },
        {
          title: 'Airline',
          path: '',
        },
        {
          title: 'Low fare tips',
          path: '',
        },
      ],
    },
  ]
  return (
    <>
      <section className="flex justify-between items-start">
        {/* Logo */}
        <div className="flex flex-col gap-y-5 justify-start">
          <h1 className="font-semibold text-5xl text-[#181E4B]">Jadoo.</h1>
          <p className="text-[#5E6282] flex flex-col leading-tight">
            Book your trip in minute, get full <span>Control for much longer</span>
          </p>
        </div>

        {/* Menu */}
        <div className="grid grid-cols-3 gap-[100px]">
          {footerMenus.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-7"
            >
              <h1 className="font-bold text-xl">{item.head}</h1>
              <div>
                <ul className="flex flex-col gap-y-1 font-semibold">
                  {item.menu.map((item, index) => (
                    <li
                      key={index}
                      className="text-[#5E6282] hover:underline"
                    >
                      <a href={item.path}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Some Link */}
        <div className="flex flex-col gap-y-2 items-start">
          {/* Social Media */}
          <div>
            <ul className="flex items-center gap-x-2">
              {/* Facebook */}
              <li>
                <a href="">
                  <img
                    src="assets/img/facebook.png"
                    alt=""
                  />
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a href="">
                  <img
                    src="assets/img/instagram.png"
                    alt=""
                  />
                </a>
              </li>

              {/* Twiter */}
              <li>
                <a href="">
                  <img
                    src="assets/img/twiter.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Download Link */}
          <div className="flex flex-col gap-y-2 items-start">
            <h1 className="text-[#5E6282] text-lg font-semibold ml-1">Discover our app</h1>
            <div className="flex items-center gap-x-3">
              <a href="">
                <img
                  src="assets/img/play-store.png"
                  alt="Play Store"
                />
              </a>
              <a href="">
                <img
                  src="assets/img/app-store.png"
                  alt="App Store"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="my-[60px]">
        <p className="text-[#5E6282] text-xs text-center font-semibold ">
          I Found Design in Here,{' '}
          <span>
            <a
              href="https://www.figma.com/community/file/993910904620677970/travel-website-landing-page"
              target="_blank"
              className="text-blue-500 underline"
            >
              Figma Community
            </a>
          </span>
        </p>
        <h1 className="text-[#5E6282] text-xs text-center font-semibold mt-2">All rights reserved@jadoo.co</h1>
      </div>
    </>
  )
}
