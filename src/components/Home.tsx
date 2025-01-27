import hero2 from '../assets/img/hero2.svg';

export default function Home() {
  return (
    <>
      <div className="homeSection flex py-12 lg:py-36">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl text-center lg:text-left lg:text-7xl font-bold lg:font-semibold">
            World class design to your products
          </h2>
          <p className="mt-4 text-center lg:text-left lg:mt-8 text-2xl text-gray-600">
            Lets bring life to your brand
          </p>
          <div className="btn flex justify-center lg:justify-start mt-12">
            <a href="#" className="mr-5 px-3 py-2 text-white text-lg rounded bg-red-600">
              Contact Us
            </a>
            <a href="#" className="mr-5 px-3 py-2 text-white text-lg rounded bg-purple-600">
              Services
            </a>
          </div>
        </div>
        <div className="w-1/2 hidden lg:flex">
          <img src={hero2} alt="hero2" />
        </div>
      </div>

      {/* Scroll Section */}
      <div className="scrollSection flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
        <span className="ml-2"> Scroll Down </span>
      </div>

      
    </>
  );
}
