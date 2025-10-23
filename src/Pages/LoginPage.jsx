import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
    const { logInUser, googleSignInUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const from = e.target;

        const email = from.email.value;
        const password = from.password.value;
        logInUser(email, password)
            .then(() => {
                toast.success('Login successfully')
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(error => {
                console.log(error)
                toast.warning(error.code)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignInUser()
            .then(() => {
                toast.success('Login Successfully')
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(error => {
                toast.warning(error.code)
                console.log(error)
            })
    }

    const handleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-4xl font-bold text-center">Login now!</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input type={showPassword ? 'text' : "password"} name='password' className="input" placeholder="Password" />
                            <button onClick={handleShowPassword} type='button' className='cursor-pointer absolute right-6 top-3.5 z-10'>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</button>
                        </div>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 hover:bg-white hover:text-black border-black">Login</button>
                        <div className='mt-3'><div className="font-medium">Dont't Have An Account ? <Link to={'/plants/signup'} className='link link-hover text-red-500'>Register</Link></div></div>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] hover:bg-black hover:text-white">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;