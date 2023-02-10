import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { Dropdown } from 'flowbite-react'
import logo from "../../assets/logo.png"
import 'flowbite';


function Navbar() {
    const navigate = useNavigate()

    return (  
        <nav className="bg-white p-2 sm:px-4 border-b border-gray-200 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto"> 
                <div className="flex items-center">
                    <a href='/'><img src={logo} className="mr-3 h-[55px] w-30 px-3" alt="brand-logo" /></a>
                </div>
                
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex gap-3 flex-row items-center flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href='/job-vacancy' className="block text-[13px] uppercase items-center text-black rounded md:bg-transparent md:text-black md:p-0 dark:text-white" aria-current="page">Lowongan Kerja</a>
                        </li>
                        {!Cookies.get('token') && <li><Link to={'/login'} className="font-bold text-green-500">Masuk</Link> | <Link to={'/register'} className="font-bold text-green-500">Daftar</Link></li>}
                        {Cookies.get('token') && 
                        <li>
                            <Dropdown
                            label={
                                <>
                                <div className='flex gap-3 items-center'>
                                <img src={Cookies.get('image_url')} alt='user-photos' className='rounded-full w-10 h-10 border-2 border-gray-300' />
                                <span className='font-semibold'>{Cookies.get('name')}</span>
                                </div>
                                </>
                             }
                            inline={true}
                            >
                            <Dropdown.Header>
                                <span className="block text-sm font-medium truncate">
                                {Cookies.get('email')}
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item>
                                <Link to={'/dashboard'}>Dashboard</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => {
                                    Cookies.remove('token')
                                    Cookies.remove('email')
                                    Cookies.remove('name')
                                    Cookies.remove('image_url')
                                    navigate('/')
                                }}>
                                Logout
                            </Dropdown.Item>
                            </Dropdown>
                        </li>}  
                </ul>
                </div>
            </div>
        </nav>
      )
}

export default Navbar