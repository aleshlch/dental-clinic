import gsap from "gsap"  
import ScrollTrigger from "gsap/ScrollTrigger"  
import React, { useLayoutEffect, useRef } from "react"  

import GalleryItem from "../GalleryItem/GalleryItem"


import serv01 from '../../img/serv01.jpg'
import serv02 from '../../img/serv02.jpg'
import serv03 from '../../img/serv03.jpg'
import serv04 from '../../img/serv04.jpg'
import serv05 from '../../img/serv05.jpeg'
import serv06 from '../../img/serv06.jpg'


import "./_services.scss" 


const images = [
  {
    src: serv01,
    title: 'DENTURES',
    text: 'Porcelain dentures are far superior to acrylic (plastic) dentures in both aesthetics and function'
  },
  {
    src: serv02,
    title: 'DENTURE RELINES',
    text: `A denture reline is a simple procedure to reshape the underside of a denture so that it fits more comfortably on the user's gums. Relining is periodically necessary as dentures lose their grip in the mouth`
  },
  {
    src: serv03,
    title: 'PARTIAL',
    text: `Our Nylon partials provide functionality and the highest aesthetic results. They are also extremely durable and do not need to be replaced nearly as often as others`
  },
  {
    src: serv04,
    title: 'ORAL SURGERY/ EXTRACTIONS',
    text: `Extractions weather simple of complicated should not be a painful process either physically or financially`
  },
  {
    src: serv05,
    title: 'CLEANINGS AND X-RAYS',
    text: `Simple and Extensive cleaning services available. Experience the cutting edge treatment that Drs. Rapanotti provide at a surprisingly affordable price`
  },
  {
    src: serv06,
    title: 'CROWNS',
    text: `Expertly fitted to each individual patients specific needs, crowns allow for an all natural smile without the need for any unsightly metal fixtures`
  },

] 




const Services = () => {
  gsap.registerPlugin(ScrollTrigger)  
  const ref = useRef(null)  

  const Horizontalref = useRef(null)  

  useLayoutEffect(() => {
    let element = ref.current  

    let scrollingElement = Horizontalref.current  

    let pinWrapWidth = scrollingElement.offsetWidth  
    let t1 = gsap.timeline()  

    setTimeout(() => {

      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: "#main-container", 
          scrub: 1,
          pin: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      })  

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `+=${pinWrapWidth} bottom`,
          scroller: "#main-container", 
          scrub: 1,
        },
        x: -pinWrapWidth,
        ease: "none",
      })  
      
      ScrollTrigger.refresh()  
      
    }, 1000)  
    
    ScrollTrigger.refresh()  

    return () => {
      t1.kill()  
      ScrollTrigger.kill()  
    }  
  }, [])  


  return (
        <div className="services-wrapper" id="services">
          <div className="container">      
                    <h2 className="services__title title">OUR SERVICES</h2>       
          </div>
            <div ref={ref} className="services__gallery">
              <div className="services__gallery-wrapper">
                  <div className="services__info-wrapper" ref={Horizontalref} data-scroll>
                    {images.map((image) => (
                        <GalleryItem key={image.src} {...image}/>
                    ))}
                  </div>
              </div>
            </div>
        </div>
    
  )  
}  

export default Services  












