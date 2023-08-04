import { useEffect, useState } from 'react' 
import SplitText from '../../utils/Split3.min'
import { gsap } from 'gsap' 
import cn from "classnames"

import './_main.scss'

const Main = () => {

    const [reveal, setReveal] = useState(false) 

    useEffect(() => {
        setReveal(true) 
    }, []) 


    useEffect(() => {
        const split = new SplitText("#header-title", {
          type: "lines",
          linesClass: "lineChildren",
        }) 
        
        const splitParent = new SplitText("#header-title", {
          type: "lines",
          linesClass: "lineParent",
        }) 

        let lines = gsap.utils.toArray(".anim") 

        gsap.to(split.lines, {
          duration: 1.2,
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power2",
        }) 

        gsap.to(lines, {
            duration: 1.2,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power4.out",
            delay: 0.5
            }) 


    }, []) 

    return (  
        <div className="container">
            <div className="header__wrapper">
                <div className="header__content">
                    <h1 className="header__title title" id="header-title">BEST PRICE DENTAL</h1>
                    <p className="header__subtitle anim">Home of Great Dental Care at Great Prices Since <span className="mixed-second">1983</span></p>
                    <div className="header__btns btns anim" >
                        <a href="tel:8306277777" className="btn-call">Call us</a>
                        <a href="mailto:admin@bestpricedental.com" target="_blank" rel="noopener noreferrer" className="btn-email">E-mail us</a>
                    </div>
                    <p className="header__text anim">1260  River Acres Dr. New Braunfels, TX. 78130</p>
                </div>
                <img className={cn("header__img", { "is-reveal": reveal })} src={require("../../img/header-img.jpg")} alt="street of Texas"/>
            </div>
        </div>
    ) 
}
 
export default Main 