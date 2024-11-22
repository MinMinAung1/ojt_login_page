import React, { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Register = (props) => {

    const [isShowPassword,setIsShowPassword] = useState(false)

    function onLogin() {
        props.loginHandler();
    }

  return (
    <div className="bg-gray-100 font-semibold">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-xl w-full">

          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">Sign Up</h2>
            <form className="mt-8 space-y-4">

            <div>
                <label className="text-gray-800 text-sm mb-2 block">User Name</label>
                  <input name="text" type="text" className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-300" placeholder="Enter user name" required/>
              </div>

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

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Comfirm Password</label>
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

              <div className="!mt-8 flex justify-center">
                <button type="button" className="py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Create
                </button>
              </div>
              <p className="text-gray-800 text-sm !mt-8 text-center">Aready have an account? <a href="#" className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold" onClick={onLogin}>Login</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register