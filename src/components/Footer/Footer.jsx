import './_footer.scss'


const Footer = () => {
    return (  
        <footer className="footer">
        <div className="container">
            <p className="footer__title">After Hours Line Available to Book Appointments 24/7  (830) 627-7777 </p>
            <div className="footer__content">
                <div className="content__column">
                    <div className="footer__text"><a href="tel:8306277777">(830) 627-7777</a></div>
                    <div className="footer__text"><a href="mailto:admin@bestprieedentalnb.com" target="_blank" rel="noopener noreferrer">admin@bestpricedental.com </a></div>
                    <div className="footer__text"><a href="https://www.google.com/maps/place/River+Acres+Dr,+New+Braunfels,+TX+78130,+USA/@29.7169321,-98.1057648,16.74z/data=!4m6!3m5!1s0x865cbd310953553f:0x78305313e8c9ccc!8m2!3d29.7182361!4d-98.1041197!16s%2Fg%2F1xtf1_87?hl=en&entry=ttu" target="_blank" rel="noopener noreferrer">1260 River Acres Dr. New Braunfels, TX. 78130</a></div>
                </div>
                <div className="content__column">
                    <p className="footer__text">Office Hours</p>
                    <p className="footer__text"><span className="mixed-main">Mon-Thu:</span> 9:00am - 4:00pm</p>
                    <p className="footer__text mixed-main">Closed Fri, Sat, Sun</p>
                </div>
            </div>
        </div>
    </footer>
    ) 
}
 
export default Footer 