import { useEffect, useRef, useState } from 'react' 
import SplitText from '../../utils/Split3.min'
import { gsap } from 'gsap' 
import useOnScreen from '../../hooks/useOnScreen' 
import cn from "classnames"

import './_about.scss'

const About = () => {

    const ref = useRef(null) 

    const [reveal, setReveal] = useState(false) 
    const onScreen = useOnScreen(ref) 

    useEffect(() => {
        if (onScreen) setReveal(onScreen) 
    }, [onScreen]) 


    useEffect(() => {
        if (reveal) {
            const split = new SplitText("#aboutText", {
            type: "lines",
            }) 
        
            gsap.from(split.lines, {
            duration: 1,
            y: -20,
            opacity: 0,
            stagger: 0.1,
            ease: "power4.out",
            }) 
        }
    }, [reveal]) 

    return (  
        <div className="about" id="about">
            <div className="container">
                <h2 className="about__title title">ABOUT US</h2>
                <p ref={ref} className={cn("about__text", { "is-reveal": reveal })} id="aboutText">
                We are providing the community with affordable cosmetic dentistry for over <span className="mixed-second">35</span> years. Our practice will concentrate on providing patients with affordable options in <span className="bold-text">dentures, partials, relines, extractions, X-rays, cleanings, and implants. Dental insurance is always accepted and convenient payment plans are available</span>
                </p>
                
            </div>
        </div>
    ) 
}
 
export default About 