import {useEffect} from "react"
import Lenis from "lenis"
import Contact from "./components/contact/contact"
import Front from "./components/Main/front"
import Projects from "./components/projects/projects"
import Services from "./components/services/services"

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
  }

     requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
  return (
    <div className="bg-zinc-900 text-white w-full">
      <Front/>
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App