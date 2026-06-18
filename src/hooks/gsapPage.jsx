import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useFadeOnScroll(selector = ".fade-section", gsapReady) {
  useEffect(() => {
    // Poll until lazy components are mounted
    const init = () => {
      const sections = document.querySelectorAll(selector)
      if (!sections.length) return

      sections.forEach((section) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "bottom 10%",
            scrub: 0.5,
          },
        })

        tl.fromTo(
          section,
          { opacity: 0, filter: "blur(8px)" },
          { opacity: 1, filter: "blur(0px)", ease: "power2.out", duration: 0.4 }
        ).to(section, {
          opacity: 0,
          filter: "blur(8px)",
          ease: "power2.in",
          duration: 0.4,
        })
      })
    }

    // If lazy components already mounted, init immediately
    // Otherwise wait for the gsapReady signal
    const interval = setInterval(() => {
      if (gsapReady?.current) {
        init()
        clearInterval(interval)
      }
    }, 50)

    return () => {
      clearInterval(interval)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [selector])
}