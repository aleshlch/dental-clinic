import { useEffect, useRef, useState } from 'react' 
import SplitText from '../../utils/Split3.min'
import { gsap } from 'gsap' 
import useOnScreen from '../../hooks/useOnScreen' 
import cn from "classnames"

import './_team.scss'

const Team = () => {

    const text1 = useRef(null) 
    const text2 = useRef(null) 

    const [reveal, setReveal] = useState(false) 
    const onScreen = useOnScreen(text1) 
    const [reveal2, setReveal2] = useState(false) 
    const onScreen2 = useOnScreen(text2) 

    useEffect(() => {
        if (onScreen) setReveal(onScreen) 
    }, [onScreen]) 

    useEffect(() => {
        if (onScreen2) setReveal2(onScreen2) 
    }, [onScreen2]) 


    useEffect(() => {
        if (reveal) {
            const split = new SplitText("#team-info__text", {
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

    useEffect(() => {
        if (reveal2) {
            const split2 = new SplitText("#team-info__text2", {
            type: "lines",
            }) 
        
            gsap.from(split2.lines, {
            duration: 1,
            y: -20,
            opacity: 0,
            stagger: 0.1,
            ease: "power4.out",
            }) 
        }
    }, [reveal2]) 


    return (  
        <div className="team">
            <div className="container">
                <div className="team__wrapper">
                        <div className="title__position">
                            <h2 className="team__title title">OUR TEAM</h2>
                        </div>
                    </div>
                    <div className={cn("team__info", { "is-reveal": reveal })}>
                        <img className="team-info__img"  src={require("../../img/team01.jpg")} alt="doctors"/>
                        <p ref={text1} className="team-info__text" id="team-info__text"><span className="mixed-second">Dr. Mario Rapanotti</span> graduated from UT San Antonio dental school in <span className="mixed-second">1983</span>. Since that time he has dedicated the last <span className="mixed-second">35</span> years to providing superior care at a truly affordable price in San Antonio </p>
                    </div>
                    <div className={cn("team__info", { "is-reveal": reveal2 })}>
                        <p ref={text2} className="team-info__text" id="team-info__text2"><span className="mixed-second">Dr. Elva Rapanotti</span> graduated from UTHSA in <span className="mixed-second">1988</span>, and has been providing superior care for <span className="mixed-second">32</span> years. The private practice has relocated to New Braunfels full time </p>
                        <img className="team-info__img"  src={require("../../img/team02.jpg")} alt="dentist tools"/>
                    </div>
                    <p className="team__text">For a no cost, no obligation examination call us today at <span className="mixed-second">830-627-777</span></p>
                    <div className="team__btns btns">
                        <a href="tel:8306277777" className="btn-call">Call us</a>
                        <a href="mailto:admin@bestpricedental.com" target="_blank" rel="noopener noreferrer" className="btn-email">E-mail us</a>
                </div>
            </div>
        </div>
    ) 
}
 
export default Team 