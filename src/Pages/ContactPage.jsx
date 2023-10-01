import React from 'react'
import Header from '../Components/Header/MainHeader/Header'
import Footer from '../Components/Footer/Footer'
import bannerImage from '../assets/trendingBanner.jpg'

const ContactPage = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between w-screen bg-white dark:bg-darkBg text-black dark:text-white'>
            <Header />
            <div className=' w-full shadow-[0px_0px_40px_#1d037b80] bg-[#12073ac5] h-[18.6rem] sm:h-[20rem] md:h-[22rem] lg:h-[24rem] flex flex-col items-center justify-center bg-no-repeat bg-cover'
                style={{ backgroundImage: `linear-gradient(#230e785a, #00000087),url(${bannerImage})`, backgroundPosition: 'center' }}>
                <p className='pt-[3.5rem] pb-[2rem] text-[2.3rem] text-white md:text-[3rem] lg:text-[3.3rem] font-mono font-bold'>Let's have a talk</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.3165540293458!2d84.3656415749541!3d24.750333349656273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cfdcad948d435%3A0x9489d29d4efc8c6e!2sMG%20Rd%2C%20Aurangabad%2C%20Bihar%20824101!5e0!3m2!1sen!2sin!4v1696148532454!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <Footer />
        </div>
    )
}

export default ContactPage
