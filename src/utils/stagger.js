import { animate, stagger, inView } from "motion";

inView(".painting", (element) => {
    animate(
        element,
        { opacity: 1, scale: 1 },
        { 
            duration: 0.9,
            easing: [0.17, 0.55, 0.55, 1],
            delay: stagger(0.25, { startDelay: 0.25})
        }
    )
    return () => animate(element, { opacity: 0, scale: 0 })
})