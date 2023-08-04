import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import Note from '../Note/Note' 
import About from '../About/About' 
import Team from '../Team/Team' 
import Services from '../Services/Services' 
import Insurance from '../Insurance/Insurance' 
import Payment from '../Payment/Payment' 
import Price from '../Price/Price' 
import InfoForClients from '../InfoForClients/InfoForClients'
import Contacts from '../Contacts/Contacts'
import Footer from '../Footer/Footer'

import { useRef } from 'react'

import ScrollTriggerProxy from '../../utils/ScrollTriggerProxy'

import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import "locomotive-scroll/dist/locomotive-scroll.css"

import './_reset.scss'
import './_base.scss'



const App = () => {

    const containerRef = useRef(null);


    return (
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={[]}
          containerRef={containerRef}
        >
            <div
            className="main-container"
            id="main-container"
            data-scroll-container
            ref={containerRef}
            >
              <ScrollTriggerProxy />
                <Navbar />
                <Main/>
                <Note/>
                <About/>
                <Team/>
                <Insurance/>
                <Services/>
                <Payment/>
                <Price/>
                <InfoForClients/>
                <Contacts/>
                <Footer/>
            </div>
        </LocomotiveScrollProvider>
    )
}
 
export default App


