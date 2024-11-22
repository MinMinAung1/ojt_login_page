import React, { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Login = (props) => {

    const [isShowPassword,setIsShowPassword] = useState(false)

    function onLogin() {
        props.loginHandler();
    }
    
  return (
    <div className="bg-gray-100 font-semibold">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-xl w-full">

          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">Sign in</h2>
            <form className="mt-8 space-y-4">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                  <input name="email" type="email" className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-300" placeholder="Enter user email" required/>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input name="password" type="password" className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-300" placeholder="Enter password" required/>
                  {!isShowPassword && <IoEyeOffOutline className="w-5 h-4 absolute right-4 cursor-pointer" onClick={() => {
                    setIsShowPassword(true)
                  }}/>}
                  {isShowPassword && <IoEyeOutline className="w-5 h-4 absolute right-4 cursor-pointer" onClick={() => {
                    setIsShowPassword(false)
                  }}/>}
                </div>
              </div>
              
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" />
                  <label for="remember-me" className="ml-3 block text-sm text-gray-800">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="text-blue-600 hover:underline font-semibold">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="!mt-8 flex justify-center">
                <button type="button" className="py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Sign in
                </button>
              </div>
              <p className="text-gray-800 text-sm !mt-8 text-center">Don't have an account? <a href="#" className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold" onClick={onLogin}>Sign up</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login