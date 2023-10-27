import AuthHeader from "./AuthHeader"
import Header from "../../Components/Header/MainHeader/Header"
import Footer from "../../Components/Footer/Footer"

const SignUp = () => {
    return (
        <div className="w-[100vw] h-[100vh] flex flex-col justify-between dark:bg-darkBg">
            <Header />
            <div className="flex flex-col items-center justify-center">
                <AuthHeader />
                <form action=""
                    className=" flex border rounded-b-md w-[19.5rem] xs:w-[22rem] flex-col text-center text-black dark:text-white">
                    <div className="flex flex-col items-start m-[0.5rem] xs:m-[0.5rem_1.5rem]">
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            className="border w-full rounded-[3px] outline-none p-1 text-[16px]" />
                    </div>
                    <div className="flex flex-col items-start m-[0.5rem] xs:m-[0.5rem_1.5rem]">
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            className="border w-full rounded-[3px] outline-none p-1 text-[16px]" />
                    </div>
                    <div className="flex flex-col items-start m-[0.5rem] xs:m-[0.5rem_1.5rem]">
                        <label htmlFor="">Password</label>
                        <input type="password" className="border w-full rounded-[3px] outline-none p-1" />
                    </div>
                    <div className="flex flex-col items-start m-[0.5rem] xs:m-[0.5rem_1.5rem]">
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" className="border w-full rounded-[3px] outline-none p-1" />
                    </div>
                    <button className='text-center bg-[#A22EFF] rounded-md p-2 m-[1rem_0.5rem] xs:m-[1rem_1.5rem] hover:bg-[#bd4aff] duration-300 text-white'>Sign Up</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default SignUp
