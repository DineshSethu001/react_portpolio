import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";

export default function App() {
  return (
    <div>
      {/* navbar section */}
      <Navbar />
      {/* Home Section */}
      <Home />
      {/* service section */}
      <Service />
    </div>
  );
}
