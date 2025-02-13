import Dinesh from '../assets/img/Dinesh.jpg';

const About = () => {
  return (
    <section id="about" className="bg-sky-300 py-20 w-full mx-2 rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="flex items-center justify-center space-x-8">
          {/* Image container */}
          <div className="flex-shrink-0">
            <img 
              src={Dinesh} 
              alt="profile picture" 
              className="rounded-full w-32 h-32 object-cover"
            />
          </div>
          
          {/* Text container */}
          <div className="max-w-2xl flex flex-col">
            <p className="text-gray-600 mb-4">
              Hello! I'm Dinesh Thanigaivel, a passionate web developer with a keen eye for design and a love for creating intuitive, user-friendly websites.
            </p>
            <p className="text-gray-600 mb-4">
              When I'm not coding, you can find me [your hobbies or interests].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
