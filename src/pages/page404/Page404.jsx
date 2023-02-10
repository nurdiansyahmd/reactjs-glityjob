import Navbar from '../../components/navbar/Navbar'
import React from 'react'
import img404 from '../../assets/404.svg'

function Page404() {
  return (
    <>
    <div className="container mx-auto text-center h-screen 2xl:py-[200px] lg:py-[100px]">
        <img src={img404} alt="" className='container mx-auto h-[300px] w-full' />
        <p className='font-bold text-[40px] mt-10'>Whoops, that page is gone.</p>
    </div>
    </>
  )
}

export default Page404