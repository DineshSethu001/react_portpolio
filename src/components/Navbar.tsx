import logo from "../assets/img/final logo.png"

export default function Navbar() {
    return (
      // Navbar section
      <section className="NavSection bg-purple-100 rounded-2xl p-5 mb-10">
        <div className="container mx-auto">
          <div className="flex">
            <a href="./index.html" className="pr-5 border-r border-purple-300 mr-5">
              <img src={logo} className=" h-12 w-12" alt="Logo" />
            </a>
            <div className="my-auto">
              <button className="lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
              </button>
              <ul className="hidden lg:flex font-bold text-gray-600">
                <li className="pr-5">
                  <a
                    className="px-5 py-2 border border-purple-100 hover:border-purple-300 rounded"
                    href=""
                  >
                    Home
                  </a>
                </li>
                <li className="pr-5">
                  <a
                    className="px-5 py-2 border border-purple-100 hover:border-purple-300 rounded"
                    href=""
                  >
                    About
                  </a>
                </li>
                <li className="pr-5">
                  <a
                    className="px-5 py-2 border border-purple-100 hover:border-purple-300 rounded"
                    href=""
                  >
                    Services
                  </a>
                </li>
                <li className="pr-5">
                  <a
                    className="px-5 py-2 border border-purple-100 hover:border-purple-300 rounded"
                    href=""
                  >
                    Portfolio
                  </a>
                </li>
                <li className="pr-5">
                  <a
                    className="px-5 py-2 border border-purple-100 hover:border-purple-300 rounded"
                    href=""
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="flex ml-auto px-3 py-2 bg-red-500 text-white font-bold rounded"
            >
              <span className="hidden pr-1 lg:block">Get a quote</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
            </a>
          </div>
          {/* Mobile responsive menu */}
          <div className="hidden">
            <ul className="lg:hidden font-bold text-gray-600">
              <li className="mt-1">
                <a className="px-5 py-2" href="">Home</a>
              </li>
              <li className="mt-1">
                <a className="px-5 py-2" href="">About</a>
              </li>
              <li className="mt-1">
                <a className="px-5" href="">Services</a>
              </li>
              <li className="mt-1">
                <a className="px-5 py-2" href="">Portfolio</a>
              </li>
              <li className="mt-1">
                <a className="px-5 py-2" href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  