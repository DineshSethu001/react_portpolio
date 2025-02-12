import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <img
          src="/placeholder.svg"
          alt="Your Name"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Name</h1>
        <p className="text-xl md:text-2xl mb-8">
          Web Developer | Designer | Problem Solver
        </p>
        <Link
          to="#contact"
          className="bg-white text-blue-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default Hero;
