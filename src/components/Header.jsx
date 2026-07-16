import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch , useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import {useState} from "react";

const Header = () => {
    const [showAlert , setshowAlert] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    console.log(user);

    const handleSignOut = () => {
        // Implement sign-out logic here
        signOut(auth)
        
        .then(() => {
            // Sign-out successful.
            dispatch(removeUser());
            navigate("/login");
        
        }).catch((error) => {
            // An error happened. 
            console.error("Error signing out:", error);
        });
    }
    return (
        <>
        {showAlert && <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black/70 rounded-sm p-15 content-center text-white font-bold" >
                <p className="text-3xl">Are you sure you want to sign out, {user?.displayName}?</p>
                <div className="flex justify-center gap-10 mt-5">
                <button onClick={handleSignOut} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                    Yes
                </button>
                <button onClick={() => {setshowAlert(false)}} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                    No
                </button>
                </div>
            </div>
            
        </div>}
        <div className = "p-5 pl-7 font-bold flex justify-between text-center bg-linear-to-b from-black/70 to-transparent">
            <img src = "https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAeuLioOK1ZSC8bQbffYbz1gZFxugAQdkx7UsMvqKDtFJLk3EWkpY-w8IBimYy_0xmg1aTzugh7JDHsGzv6hqIL9_qklFo-PFSH81MwCe9rokU4kGkdki.svg" alt = "LOGO" className="h-12"/>
            <div className="relative group">
            <img src = "https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg" alt = "sign out" className="w-12 cursor-pointer hover:border" 
                onClick={() => {setshowAlert(true)}}
            />
            <div className="absolute right-0 top-full mt-1 w-20 bg-black/90 border border-gray-700 rounded hidden group-hover:block text-white text-sm ">
                    Sign Out
            </div>
            </div>
        </div>
        </>
    )
}

export default Header;