import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Cookies from 'js-cookie'

function Profile() {
  return (
    <>
    <div className="flex">
        <Sidebar/>
        <div className="container mx-auto  mt-[120px] py-10 2xl:w-full lg:w-[1000px] md:w-[400px]">
        <h1 className='font-bold text-[25px] mb-10'>Profile</h1>
            <div className="flex gap-3">
                <img src={Cookies.get('image_url')} alt="thumbnail" className='h-32 w-32' />
                <div className="flex-col">
                    <h1 className='text-[20px]'>{Cookies.get('name')}</h1>
                    <h1 className='text-[20px]'>{Cookies.get('email')}</h1>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile