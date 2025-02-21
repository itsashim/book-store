import { RiMenu2Fill } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import avatarImg from "../assets/avatar.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import  {useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";




function Navbar() {
    const { currentUser,logoutUser } = useAuth();
    const [isOpenDropdown, SetIsOpenDropdown] = useState(false);
    const navigationDropdown = [
        {name: "Dashboard",link:"/dashboard"},
        {name: "Orders",link:"/orders"},
        {name: "Cart Page",link:"/cart"},
        {name: "Check Out",link:"/checkout"}
    ]
    const cartLen = useSelector((state) => state.cart.cartItems.length)

    async function handleLogout(){
        try{
            await logoutUser();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Logged Out",
                showConfirmButton: false,
                timer: 1500
            });
        }catch(err){
            console.log(err)
        }
    }

    return (
        <header className="py-5.5 px-7">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/">
                    <RiMenu2Fill className="me-8 size-6"/>
                    </Link>
                <div className="border-1 rounded-(--std-br) p-1.5 flex items-center gap-1">
                    <CiSearch className="size-5"/>
                    <input type="text" className="outline-0" placeholder="What are you looking for?" />
                </div>
                </div>
                <div className="flex gap-2.5 items-center relative">
                    {
                        !currentUser ? 
                         <Link to='/login'>
                         <CiUser className="size-5"/> 
                         </Link>
                         : <>
                        <div className="" onClick={()=>SetIsOpenDropdown(!isOpenDropdown)}>
                            <img  className="size-8" src={avatarImg} alt="" />
                        </div>
                        { isOpenDropdown &&
                        <div className="absolute top-11 right-0 w-48 shadow bg-white z-40">
                            <ul>
                                {navigationDropdown.map((child)=>{
                                    return <li className="p-2 hover:bg-gray-400" key={child.name}>
                                        <Link onClick={()=>SetIsOpenDropdown(false)} to={child.link}>{child.name}</Link>
                                    </li>
                                })}
                                <li className="p-2 hover:bg-gray-400">
                                    <button onClick={()=> handleLogout()}>Logout</button>
                                </li>
                            </ul>
                        </div>//
                                    }
                        </>
                    }
                    <CiHeart className="text-2xl"/>
                    <div className="relative">
                        <span className="absolute flex items-center justify-center top-[-11px] left-[10px] size-5 rounded-full bg-amber-500 ">{cartLen}</span>
                        <Link to="/cart">
                            <CiShoppingCart className="text-2xl"/>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
