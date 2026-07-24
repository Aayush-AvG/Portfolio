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

// Tiny wrapper that fires a callback once its parent Suspense resolves
const OnMount = ({ onMount }) => {
  useEffect(() => { onMount() }, [])
  return null
}

// Lightweight fallback so sections don't pop in on a blank gap
const SectionFallback = () => (
  <div className="w-full min-h-[40vh] flex items-center justify-center bg-zinc-900">
    <div className="w-8 h-8 border-2 border-white/20 border-t-white/70 rounded-full animate-spin" />
  </div>
)

const App = () => {
  const gsapReady = useRef(false)
  const readyCount = useRef(0)

  useEffect(() => {
    if (window.innerWidth < 768) return // native scroll on phones, done
    const lenis = new Lenis()
    lenis.on("scroll", ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
    return () => lenis.destroy()
  }, [])

  // Prefetch the 3D model chunks as soon as the browser is idle — no
  // arbitrary timer, starts ASAP without competing with initial paint/LCP.
  useEffect(() => {
    const prefetch = () => {
      import("./components/services/models/lapContainer")
      import("./components/services/models/manContainer")
      import("./components/services/models/robContainer")
    }
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(prefetch)
      return () => cancelIdleCallback(id)
    }
    const t = setTimeout(prefetch, 0)
    return () => clearTimeout(t)
  }, [])

  // Only refresh ScrollTrigger once ALL THREE lazy sections have mounted —
  // not just whichever one happens to resolve first/last.
  const handleSectionReady = () => {
    readyCount.current += 1
    if (readyCount.current === 3) {
      gsapReady.current = true
      ScrollTrigger.refresh()
    }
  }

  useFadeOnScroll(".fade-section", gsapReady)

  return (
    <div className="bg-zinc-900 text-white w-full">
      <Front />
      <Suspense fallback={<SectionFallback />}>
        <Services />
        <OnMount onMount={handleSectionReady} />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
        <OnMount onMount={handleSectionReady} />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
        <OnMount onMount={handleSectionReady} />
      </Suspense>
    </div>
  )
}

export default App
