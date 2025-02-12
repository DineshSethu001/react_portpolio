import profileImage from '../assets/img/team3.jpg'
import logo from '../assets/img/final logo.png'

export default function Header() {
    return (
      <header className="bg-violet-600 w-64 min-h-screen text-white p-4 flex flex-col justify-between rounded-lg">
        <div className="container mx-auto flex flex-col items-center flex-grow">
          <div className="text-xl font-bold text-center">
            <img src={logo} alt="logo" className='h-24 h-24'/>
          </div>
          <nav className='mt-8'>
            <ul className="flex flex-col justify-evenly space-y-4">
              <li><a href="#about" className="hover:underline text-center">About</a></li>
              <li><a href="#projects" className="hover:underline text-center">Projects</a></li>
              <li><a href="#skills" className="hover:underline text-center">Skills</a></li>
              <li><a href="#contact" className="hover:underline text-center">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="profile-detail flex justify-center pb-4">
          <div className="flex items-center space-x-3">
          <img src={profileImage} alt="profile" className="w-12 h-12 rounded-lg"/>
          <h6>Dinesh T</h6>
          </div>
        </div>
      </header>
    );
  }
  