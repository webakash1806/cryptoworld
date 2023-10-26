import AuthHeader from "./AuthHeader"

const SignUp = () => {
    return (
        <>
            <AuthHeader />
            <form action=""
                className="m-[1rem] flex flex-col border text-center">
                <div>
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        className="border-2" />
                </div>
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
                <div>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" className="border-2" />
                </div>
                <button>SignUP</button>
            </form>
        </>
    )
}

export default SignUp
