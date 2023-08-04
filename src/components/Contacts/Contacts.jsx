import { useEffect, useRef, useState } from 'react' 
import { gsap } from 'gsap' 
import useOnScreen from '../../hooks/useOnScreen' 
import cn from "classnames"

import './_contacts.scss'

const Contacts = () => {

    const ref = useRef(null) 

    const [reveal, setReveal] = useState(false) 
    const onScreen = useOnScreen(ref) 

    useEffect(() => {
        if (onScreen) setReveal(onScreen) 
    }, [onScreen]) 


    useEffect(() => {
        if (reveal) {
            let lines = gsap.utils.toArray(".contacts__text") 
        
            gsap.from(lines, {
            duration: 1,
            y: -20,
            opacity: 0,
            stagger: 0.1,
            ease: "power4.out",
            }) 
        }
    }, [reveal]) 

    return (  
        <div className="contacts" id='contacts'>
            <div className="container">
                <h2 className="contacts__title title">CONTACTS</h2>
                <div className="contacts__wrapper">
                    <div className={cn("contacts__info", { "is-reveal": reveal })} ref={ref}>
                        <p className="contacts__text">(830) 627-7777 </p>
                        <p className="contacts__text">admin@bestpricedental.com </p>
                        <p className="contacts__text">1260 River Acres Dr. New Braunfels, TX. 78130</p>
                        <p className="contacts__text contacts__text-secondary">*Across from Blacks BBQ behind the Wells Fargo just outside of Beautiful Gruene, TX</p>
                        <p className="contacts__text">Office Hours</p>
                        <p className="contacts__text"><span className="mixed-main">Mon-Thu:</span> 9:00am - 4:00pm</p>
                        <p className="contacts__text mixed-main">Closed Fri, Sat, Sun </p>
                    </div>
                    <div className="contacts__map">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4150.579112332357!2d-98.10576483686148!3d29.716932117045676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cbd310953553f%3A0x78305313e8c9ccc!2sRiver%20Acres%20Dr%2C%20New%20Braunfels%2C%20TX%2078130%2C%20USA!5e0!3m2!1sen!2skz!4v1687368233046!5m2!1sen!2skz" className="responsive-iframe" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    ) 
}
 
export default Contacts 