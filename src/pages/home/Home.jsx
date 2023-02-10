import React, { useEffect } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Hero from '../../components/hero/Hero'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
  const {data, setData} = useContext(GlobalContext)

  useEffect(()=>{
        axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
        .then((res)=>{
            setData(res.data.data)
            // console.log(res.data.data);
        })
        .catch((error)=>{
            console.log(error.message);
        })  

   
},[setData])

  return (
    <>
    <Hero/>
    <div className='h-1/2'>
      <div className="container mx-auto py-40 px-48 flex flex-wrap xl:gap-11 lg:px-36 lg:gap-5 sm:gap-10 max-sm:px-20 max-sm:gap-8 max-sm:py-20">
        {data !== null && data
        .filter((res,index)=>{
          return index < 6
        })
        .map((res)=>{
          return(
            <div key={res.id}>
              <Link to={`/job-vacancy/${res.id}`} className="block p-6 2xl:w-[350px] 2xl:h-[350px] lg:w-[290px] max-sm:w-[250px] bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">  
                <img src={res.company_image_url} alt="company-thumb" className='2xl:h-32 2xl:w-32 lg:h-20 lg:w-20 mr-3' />
                <h2 className="mb-2 mt-2 2xl:text-2xl lg:text-lg tracking-tight text-gray-900 dark:text-white">{res.title}</h2> 
                <h2 className="mb-2 2xl:text-lg lg:text-md text-green-500 tracking-tight text-gray-900 dark:text-white">{res.company_name}</h2> 
                <h2 className="mb-2 text-lg tracking-tight text-gray-500 dark:text-white">{res.company_city}</h2>
            </Link>
            </div>
          )
        })}
      </div>
    </div>
    {/* <div className="bg-hire bg-cover bg-center 2xl:h-[400px] lg:h-[300px]">
      <div className="bg-yellow-300 bg-opacity-80 h-full">
        <div className='container mx-auto text-center w-[540px] 2xl:py-32 lg:py-24 max-sm:w-full max-sm:p-10'>
          <h1 className='text-gray-600 text-center font-bold text-4xl break-words max-sm:text-base max-sm:font-semibold'>Temukan tips karier yang tepat untuk kamu di sini</h1>
          <Link className='inline-flex underline decoration-2 decoration-green-500 items-center mt-3 text-lg text-gray-600 font-semibold max-sm:text-base'>Lihat semua tips perencanaan karier <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></Link>
        </div>
      </div>
    </div> */}
    </>
  )
}

export default Home