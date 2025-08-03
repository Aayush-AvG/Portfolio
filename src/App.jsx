import Contact from "./components/contact/contact"
import Front from "./components/Main/front"
import Projects from "./components/projects/projects"
import Services from "./components/services/services"

const App = () => {
  return (
    <div className="bg-zinc-900 text-white w-full">
      <Front/>
      <Services/>
      <Contact/>
      <Projects/>
    </div>
  )
}

export default App