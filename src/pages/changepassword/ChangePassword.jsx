import React from 'react'
import { useContext } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { GlobalContext } from '../../context/GlobalContext'

function ChangePassword() {
  const {input, handleSubmitPassword, handleInputPassword} = useContext(GlobalContext)

  return (
    <div className="flex">
        <Sidebar/>
        <div className="container mx-auto max-w-3xl mt-[100px] py-10 2xl:w-full lg:w-[1000px] md:w-[400px]">
        <h1 className='font-bold text-[25px] border-b mb-10'>Change Password</h1>
        <form onSubmit={handleSubmitPassword}>
            <div className="mb-6">
              <label htmlFor="current_password" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Password Lama</label>
              <input onChange={handleInputPassword} value={input.current_password} minLength="8" name='current_password' type="password" id="current_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password Lama" required/>
            </div>
            <div className="mb-6">
              <label htmlFor="new_password" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Password Baru</label>
              <input onChange={handleInputPassword} value={input.new_password} minLength="8" name='new_password' type="password" id="new_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Password Baru' required/>
            </div>
            <div className="mb-6">
              <label htmlFor="new_confirm_password" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Konfirmasi Password Baru</label>
              <input onChange={handleInputPassword} value={input.new_confirm_password} minLength="8" name='new_confirm_password' type="password" id="new_confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Konfirmasi Password Baru' required/>
            </div>
            <button type="submit" className="text-white bg-[#02a8ae] hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-gray-100 dark:focus:ring-blue-800">Submit</button>
          </form>
        </div>
    </div>
  )
}

export default ChangePassword