import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import {useForm} from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import { useState } from "react";


function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const [error,setError] = useState();

      const navigate = useNavigate()
      const {signUpUser,signInWithGoogle} = useAuth();
      const onSubmit = async (data) => {
            try{
                await signUpUser(data.email,data.password);
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: "SignUp Successfully",
                showConfirmButton: false,
                timer: 1500
            });
                navigate("/");
            }catch(err){
                setError("Please try again")
                console.log(err)
            }
        }
      const handleSignInWithGoogle = async ()=>{
        try {
            await signInWithGoogle();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successful",
                showConfirmButton: false,
                timer: 1500
            });
              navigate("/");
          } catch (error) {
            console.error("Google Sign-in Error:", error);
          }
      }
    return (
        <div className="h-[calc(100dvh-140px)] flex items-center justify-center">
            <div className="w-72  p-5 rounded-2xl border-1 border-amber-950">
                <h2 className="text-4xl font-bold text-center mb-4">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input   className="border-1 px-3 py-1" type="email" name="email" placeholder="Email" {...register("email",{required: true})}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input className="px-3 py-1 border-1" type="password" name="password" placeholder="Password" {...register("password",{required: true})}/>
                    </div>
                    <button className="btn-primary mt-4">Singup</button>
                    {errors && <span className="text-red-500">{errors.message}</span>}
                    {error && <p className="text-red-500">{error}</p>}
                    <div>
                    <Link className="text-blue-500" to="/login">Login</Link>
                    </div>
                    <button onClick={()=> handleSignInWithGoogle()} className="bg-blue-600 text-amber-50 flex items-center p-3 gap-3 mt-3"><FaGoogle />
                    Login with google</button>
                </form>
            </div>
        </div>
    )
}

export default Register
