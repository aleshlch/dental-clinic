import { useEffect, useRef, useState } from 'react' 
import SplitText from '../../utils/Split3.min'
import { gsap } from 'gsap' 
import useOnScreen from '../../hooks/useOnScreen' 
import cn from "classnames"

import './_price.scss'

const Price = () => {

    const ref = useRef(null) 

    const [reveal, setReveal] = useState(false) 
    const onScreen = useOnScreen(ref) 

    useEffect(() => {
        if (onScreen) setReveal(onScreen) 
    }, [onScreen]) 


    useEffect(() => {
        if (reveal) {
            const split = new SplitText("#column1", {
                type: "lines",
            }) 

            const split2 = new SplitText("#column2", {
                type: "lines",
            }) 

            gsap.from(split.lines, {
            duration: 1,
            y: -20,
            opacity: 0,
            stagger: 0.1,
            ease: "power4.out",
            }) 

            gsap.from(split2.lines, {
                duration: 1,
                y: -20,
                opacity: 0,
                stagger: 0.1,
                ease: "power4.out",
                }) 
        }
    }, [reveal]) 

    return (  
        <div className="price" id='price'>
            <div className="container">
                    <div className="title__position"><h2 className="price__title title">PRICE-LIST</h2></div>
                <div className="price__wrapper" ref={ref}>
                    <div className={cn("price__column", { "is-reveal": reveal })} id="column1">
                        <p className="price__text">DENTURES</p>
                        <p className="price__text">EXTRACTIONS</p>
                        <p className="price__text">PARTIALS</p>
                        <p className="price__text">CLEANING</p>
                        <p className="price__text">CROWNS</p>
                    </div>
                    <div className={cn("price__column", { "is-reveal": reveal })}  id="column2">
                        <p className="price__numbers">750$</p>
                        <p className="price__numbers">150$</p>
                        <p className="price__numbers">550$</p>
                        <p className="price__numbers">150$</p>
                        <p className="price__numbers">150$</p>
                    </div>
                </div>
            </div>
        </div>
    ) 
}
 
export default Price 