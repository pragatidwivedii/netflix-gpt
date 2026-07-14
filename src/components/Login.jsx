import {useState} from "react";
const Header = () => {
    return (
        <div className="absolute w-6/12 m-10 ml-30 z-10 ">
            <img src = "https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAeuLioOK1ZSC8bQbffYbz1gZFxugAQdkx7UsMvqKDtFJLk3EWkpY-w8IBimYy_0xmg1aTzugh7JDHsGzv6hqIL9_qklFo-PFSH81MwCe9rokU4kGkdki.svg" alt = "LOGO" className="h-12"/>
        </div>
    )
}
const Login = () => {
    const [signUp , setsignUp] = useState(false);

    const handleForm = () => {
        setsignUp(!signUp);
    }
    return (
        <div className ="">
            <Header />
            {/* gradient affect */}
            <div className="absolute top-0 left-0 w-full h-60 bg-linear-to-b from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-90 bg-linear-to-t from-black/90 to-transparent"></div>

            {/* background Image */}
            <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/eaa165a3-80a7-44cb-8df6-be1a7e225369/web/IN-en-20260706-TRIFECTA-perspective_2f2fae68-6962-4d52-8cc2-1fe6ef5c6a56_small.jpg" className="h-screen w-full"/>

            {/* Form */}
            <div className = "  absolute inset-0 flex justify-center items-center ">
            <form className=" bg-black/70 rounded-sm flex flex-col p-10">

                <h1 className="mb-5 font-bold text-3xl text-white">{signUp ? 'Sign Up' : 'Sign In'}</h1> 
             
                {(signUp) && (<input type="text" placeholder="Name" className="mb-5 px-5 py-3 w-70  bg-gray-700  placeholder:text-zinc-400" />)}

                <input type="text" placeholder="Email Address" className="mb-5 px-5 py-3 w-70  bg-gray-700 placeholder:text-zinc-400"/>

                <input type="password" placeholder="Password" className="mb-5 px-5 py-3 w-70  bg-gray-700 placeholder:text-zinc-400"/>

                <button className="mb-5 py-2 w-70 bg-red-700 font-bold text-white text-xl cursor-pointer">{signUp ? 'Sign Up' : 'Sign In'}</button>

                {(signUp) ? <p className="mt-5 text-white">Already have an account?  <span className = "cursor-pointer font-bold hover:text-blue-500 hover:underline"onClick={handleForm}>Sign In now</span> </p> :
                <p className="mt-5 text-white">New to Netflix?  <span className = "cursor-pointer font-bold hover:text-blue-500 hover:underline" onClick={handleForm}>Sign Up now</span> </p>}

            </form>
            </div>
        </div>
    );
};

export default Login;
