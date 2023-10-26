import AuthHeader from "./AuthHeader"

const Login = () => {
    return (
        <>
            <AuthHeader />
            <form action=""
                className=" flex flex-col border text-center">
                <div>
                    <label htmlFor="">Email</label>
                    <input
                        type="text"
                        className="border-2" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" className="border-2" />
                </div>
                <button>Login</button>
            </form>
        </>
    )
}

export default Login
