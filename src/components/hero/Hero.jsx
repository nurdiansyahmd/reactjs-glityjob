import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="bg-hero bg-cover dark:bg-gray-900">
        <div className="bg-green-700 bg-opacity-50">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 max-sm:p-14">
            <p className="mb-8 text-2xl font-bold text-white sm:px-16 xl:px-48 dark:text-gray-400">Jelajahi 3000+ pekerjaan baru setian bulan!</p>

            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link to={'/job-vacancy'} className="inline-flex justify-center items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-[#02a8ae] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 lg:w-[350px]">
                    Temukan pekerjaanmu sekarang
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>            
        </div>
        </div>
    </section>
  )
}

export default Hero


