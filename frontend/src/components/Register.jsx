import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import {useForm} from "react-hook-form";


function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data);
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
                    <div>
                    <Link className="text-blue-500" to="/login">Login</Link>
                    </div>
                    <Link className="bg-blue-600 text-amber-50 flex items-center p-3 gap-3 mt-3"><FaGoogle />
                    Login with google</Link>
                </form>
            </div>
        </div>
    )
}

export default Register
