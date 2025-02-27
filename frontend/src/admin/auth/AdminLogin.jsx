import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { getBaseUrl } from "../../utils/getBaseUrl";

function AdminLogin() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${getBaseUrl()}auth/admin`, data,{
                headers: { 'Content-Type': 'application/json' },
            });
            
            const authToken = response.data.token;
                if (authToken) {
                    localStorage.setItem('token', authToken);
        
                    // Decode token to get expiration time
                    const decodedToken = JSON.parse(atob(authToken.split(".")[1]));
                    const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
                    const currentTime = Date.now();
                    const timeUntilExpiration = expirationTime - currentTime;
        
                    console.log(`Token expires in ${timeUntilExpiration / 1000} seconds`);
        
                    // Set timeout to remove token when it expires
                    setTimeout(() => {
                        localStorage.removeItem('token');
                        console.log("Token expired, logged out automatically.");
                        window.location.href = "/login"; // Redirect to login page
                    }, timeUntilExpiration);
                    navigate("/dashboard")
                }
        } catch (err) {
            if (err.response?.data?.message) {
                setError("apiError", { message: err.response.data.message });
            } else {
                console.error("Login Error:", err);
            }
        }
    };

    return (
        <div className="max-w-sm mx-auto p-6 bg-white shadow rounded-lg">
            <h1 className="text-xl font-semibold mb-4 text-center">Admin Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Username */}
                <div>
                    <label className="block text-sm font-medium">Username</label>
                    <input
                        className={`w-full px-3 py-2 border rounded ${
                            errors.username ? "border-red-500" : "border-gray-300"
                        }`}
                        type="text"
                        {...register("username", {
                            required: "Username is required",
                            minLength: { value: 3, message: "At least 3 characters" },
                            maxLength: { value: 20, message: "Max 20 characters" },
                        })}
                    />
                    {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium">Password</label>
                    <input
                        className={`w-full px-3 py-2 border rounded ${
                            errors.password ? "border-red-500" : "border-gray-300"
                        }`}
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                        })}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                {/* API Error */}
                {errors.apiError && <p className="text-red-500 text-sm">{errors.apiError.message}</p>}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    {isSubmitting ? "Logging in..." : "Login"}
                </button>

                <div className="text-center mt-2">
                    <Link className="text-blue-500" to="/register">Register</Link>
                </div>
            </form>
        </div>
    );
}

export default AdminLogin;
