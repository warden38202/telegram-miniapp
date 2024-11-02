import { useNavigate } from "react-router-dom";
import AmdinProtectBG from "../../../assets/images/admin-login-bg.png"

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen bg-gray-900 text-white">
            {/* Left Side - Form Section */}
            <div className="w-full max-w-md p-10 m-auto lg:w-1/3">
                <div className="text-center mb-10 flex items-center justify-center">
                    <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.2113 27.6816C33.3546 33.0033 27.9842 37.1793 21.7732 38.9412C15.5579 37.1793 10.1875 33.0033 7.33083 27.6816C4.48471 22.3833 4.06542 15.9584 6.08989 9.02941C8.97412 8.84094 15.3758 8.08071 21.7732 5.05882C28.1685 8.08071 34.5701 8.84094 37.4522 9.02941C39.4809 15.9584 39.0574 22.3833 36.2113 27.6816ZM19.6471 19.8824C19.6471 20.444 19.8702 20.9826 20.2673 21.3798C20.6644 21.7769 21.2031 22 21.7647 22C22.3263 22 22.865 21.7769 23.2621 21.3798C23.6592 20.9826 23.8824 20.444 23.8824 19.8824V15.6471C23.8824 15.0854 23.6592 14.5468 23.2621 14.1497C22.865 13.7525 22.3263 13.5294 21.7647 13.5294C21.2031 13.5294 20.6644 13.7525 20.2673 14.1497C19.8702 14.5468 19.6471 15.0854 19.6471 15.6471V19.8824ZM19.6471 28.3529C19.6471 28.9146 19.8702 29.4532 20.2673 29.8503C20.6644 30.2475 21.2031 30.4706 21.7647 30.4706C22.3263 30.4706 22.865 30.2475 23.2621 29.8503C23.6592 29.4532 23.8824 28.9146 23.8824 28.3529C23.8824 27.7913 23.6592 27.2527 23.2621 26.8555C22.865 26.4584 22.3263 26.2353 21.7647 26.2353C21.2031 26.2353 20.6644 26.4584 20.2673 26.8555C19.8702 27.2527 19.6471 27.7913 19.6471 28.3529Z" fill="#50A8EB" />
                    </svg>
                    <h1 className="text-3xl font-semibold ml-3">Lexcura</h1>
                </div>
                <form>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none"
                            placeholder="someone@gmail.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none"
                            placeholder="*********"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-primary rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                        onClick={() => navigate('dashboard')}
                    >
                        LOGIN
                    </button>
                </form>
            </div>

            {/* Right Side - Illustration */}
            <div className="hidden lg:flex items-center justify-center w-2/3 bg-gray-800">
                <img src={AmdinProtectBG} alt="ADMIN LOGIN" className="h-[100vh] w-full" />
            </div>
        </div>
    )
}

export default Login;