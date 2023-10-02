import React from 'react'
import Header from '../Components/Header/MainHeader/Header'
import Footer from '../Components/Footer/Footer'
import bannerImage from '../assets/trendingBanner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const ContactPage = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between w-screen bg-white dark:bg-darkBg text-black dark:text-white'>
            <Header />
            <div className=' w-full shadow-[0px_0px_40px_#1d037b80] bg-[#12073ac5] h-fit pb-8 flex flex-col items-center justify-center bg-no-repeat bg-cover'
                style={{ backgroundImage: `linear-gradient(#230e785a, #00000087),url(${bannerImage})`, backgroundPosition: 'center' }}>
                <p className='pt-[3.5rem] pb-[2rem] text-[2.3rem] text-white md:text-[3rem] lg:text-[3.3rem] font-mono font-bold text-center'>Let's have a talk</p>
                <div className='text-black flex flex-col xmd:flex-row xmd:gap-6 gap-3'>
                    <a href={`tel:+916207234759`} className='w-full cursor-pointer rounded-md p-3 flex items-center justify-center font-semibold text-[18px] gap-2 bg-white '>
                        <FontAwesomeIcon icon={faPhone} className='text-[#1d7f20] text-[22px]' />
                        <p>+91 6207234759</p>
                    </a>
                    <div>
                        <a href={`mailto:itsakash18.06@gmail.com`} className='w-full cursor-pointer rounded-md p-3 flex items-center justify-center font-semibold text-[18px] gap-2 bg-white '>
                            <FontAwesomeIcon icon={faEnvelope} className='text-[#EA4335] text-[22px]' />
                            <p>itsakash18.06@gmail.com</p>
                        </a>
                    </div>
                    <div>
                        <a target={`_blank`} href="https://github.com/webakash1806" className='w-full cursor-pointer rounded-md p-3 flex items-center justify-center font-semibold text-[18px] gap-2 bg-white '>
                            <FontAwesomeIcon icon={faGithub} className='text-[#161a16] text-[22px]' />
                            <p>webakash1806</p>
                        </a>
                    </div>
                    <div>
                        <a target={`_blank`} href="https://www.linkedin.com/in/itsakash18/" className='w-full cursor-pointer rounded-md p-3 flex items-center justify-center font-semibold text-[18px] gap-2 bg-white '>
                            <FontAwesomeIcon icon={faLinkedinIn} className='text-[#3766ff] text-[22px]' />
                            <p>itsakash18</p>
                        </a>
                    </div>
                </div>
                <form action="" method='POST' className='flex flex-col items-center justify-center pt-4 w-screen'>
                    <h2 className='text-[1.5rem] font-bold mb-2 '>Pitch us</h2>
                    <div>
                        <p>hello,</p>
                        <p>
                            my name is
                            <input type="text"
                                name='username'
                                placeholder='your name'
                                autoComplete='off'
                                required className='bg-transparent border-b outline-none' />
                            and <br /> my e-mail is
                            <input type="email" name='email'
                                placeholder='your email'
                                autoComplete='off'
                                required className='bg-transparent border-b outline-none' />
                            <br /> and i would like to discuss about
                            <input type="text"
                                name='message'
                                placeholder='message...'
                                autoComplete='off'
                                required className='bg-transparent border-b outline-none' />
                        </p>
                        <input type="submit" value="Send" className='bg-[#A22EFF] hover:bg-[#a12effc0] hover:rounded-md duration-300 p-[0.4rem_3.5rem] rounded-sm cursor-pointer mt-2' />
                    </div>
                </form>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.3165540293458!2d84.3656415749541!3d24.750333349656273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cfdcad948d435%3A0x9489d29d4efc8c6e!2sMG%20Rd%2C%20Aurangabad%2C%20Bihar%20824101!5e0!3m2!1sen!2sin!4v1696148532454!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <Footer />
        </div>
    )
}

export default ContactPage
