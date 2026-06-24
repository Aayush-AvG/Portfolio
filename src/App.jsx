import { useEffect, lazy, Suspense, useRef } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Front from "./components/Main/front"
import { useFadeOnScroll } from "./hooks/gsapPage"

const Services = lazy(() => import("./components/services/services"))
const Projects = lazy(() => import("./components/projects/projects"))
const Contact = lazy(() => import("./components/contact/contact"))

gsap.registerPlugin(ScrollTrigger)

// Tiny wrapper that fires a callback once it mounts
const OnMount = ({ onMount }) => {
  useEffect(() => { onMount() }, [])
  return null
}

const App = () => {
  const gsapReady = useRef(false)

  useEffect(() => {
    const lenis = new Lenis()
    lenis.on("scroll", ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
    return () => lenis.destroy()
  }, [])

  useEffect(() => {
  // After 3 seconds, quietly prefetch the 3D chunks in the background
  const t = setTimeout(() => {
    import("./components/services/models/lapContainer")
    import("./components/services/models/manContainer")
    import("./components/services/models/robContainer")
  }, 3000)
  return () => clearTimeout(t)
}, [])

  useFadeOnScroll(".fade-section", gsapReady)

  return (
    <div className="bg-zinc-900 text-white w-full">
      <Front />
      <Suspense fallback={null}>
        <Services />
        </Suspense>
        <Suspense fallback={null}>  
        <Projects />
        </Suspense>
        <Suspense fallback={null}>
        <Contact />
        {/* Fires after all lazy components are in the DOM */}
        <OnMount onMount={() => {
          gsapReady.current = true
          ScrollTrigger.refresh()
        }} />
      </Suspense>
    </div>
  )
}

export default App