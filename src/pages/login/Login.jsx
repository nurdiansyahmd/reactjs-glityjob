import React, { useState } from 'react'
import Cookies from "js-cookie"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        email : "",
        password : ""
    })

    // Handle Input
    const handleChange = (event) => {
        
        let value = event.target.value
        let name = event.target.name

        setInput({...input, [name] : value})
    }

    // Handle Login
    const handleLogin = (event) => {
        event.preventDefault()

        let {email, password} = input

        axios.post('https://dev-example.sanbercloud.com/api/login', {email, password} )
        .then((res) => {
            console.log(res.data)
            let data = res.data
            Cookies.set('token', data.token)
            Cookies.set('email', data.user.email)
            Cookies.set('name', data.user.name)
            Cookies.set('image_url', data.user.image_url)
            alert("Login Successfull")
            navigate('/dashboard')
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }

  return (
    <div className="max-w-lg p-6 bg-white mx-auto mt-40 mb-[350px] border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">        
        <form onSubmit={handleLogin}>
        <h1 className='font-semibold text-[18px] border-b-2 border-gray-200 leading-10 mb-5'>LOGIN</h1>
        <div className="mb-6">
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat Email</label>
            <input onChange={handleChange} value={input.email} name="email" type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nama@gmail.com" required />
        </div>
        <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input onChange={handleChange} value={input.password} name="password" type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Masuk</button>
        <div className='mt-10 border-t py-5'>
            <p className="text-sm">Tidak punya akun? <Link to={'/register'} className="text-blue-700 font-bold">Daftar disini</Link></p>
        </div>
        </form>
    </div>
  )
}

export default Login