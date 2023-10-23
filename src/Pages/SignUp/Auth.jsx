import Login from "./Login"
import SignUp from "./SignUp"
import Header from "../../Components/Header/MainHeader/Header"
import Footer from "../../Components/Footer/Footer"

const Auth = () => {
    return (
        <div className="flex w-[100vw] flex-col justify-between h-[100vh]">
            <Header />
            <Login />
            <SignUp />
            <Footer />
        </div>
    )
}

export default Auth
