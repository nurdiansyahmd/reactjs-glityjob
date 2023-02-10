import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Register() {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        image_url: "",
        name: "",
        email: "",
        password: ""
    })

    // Handle Input
    const handleChange = (event) => {
        
        let value = event.target.value
        let name = event.target.name

        if(name === "image_url"){
            setInput({...input, image_url : value})
        }else if(name === "name"){
            setInput({...input, name : value})
        }else if(name === "email"){
            setInput({...input, email : value})
        }else if(name === "password"){
            setInput({...input, password : value})
        }
    }

    // Handle Register
    const handleRegister = (event) => {
        event.preventDefault();
        console.log(input);
        // Destructur Object
        let {image_url,name, email, password} = input

        axios.post('https://dev-example.sanbercloud.com/api/register', {image_url,name,email, password} )
        .then((res) => {
            console.log(res)
            navigate('/')
            alert('Akun berhasil di didaftarkan!')
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }

  return (
    <div className="max-w-xl p-6 bg-white mx-auto mb-[350px] mt-40 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h1 className='font-semibold text-[18px] border-b-2 border-gray-200 leading-10 mb-5'>DAFTAR AKUN</h1>
        <form onSubmit={handleRegister}>
            <div className="relative z-0 w-full mb-6 group">
                    <input onChange={handleChange} value={input.image_url} type="text" name="image_url" id="image_url" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="image_url" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gambar URL</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                    <input onChange={handleChange} value={input.name} type="text" name="name" id="floating_fullname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_fullname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Lengkap</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input onChange={handleChange} value={input.email} type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Alamat Email</label>
            </div>
            <div className="relative z-0 w-full mb-10 group">
                <input onChange={handleChange} value={input.password} minLength="8" type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Daftar</button>
            <div className='mt-10 border-t py-5'>
                <p className="text-sm">Sudah punya akun? <Link to={'/login'} className="text-blue-700 font-bold">Login disini</Link></p>
            </div>
        </form>
    </div>
  )
}

export default Register