import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

function DetailsPage() {
    const {data, setData, handlePrice} = useContext(GlobalContext)
    const {id} = useParams()

    useEffect(()=>{
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
            .then((res)=>{
                setData([res.data])
            })
            .catch((error)=>{
                console.log(error.message);
            })  
    },[setData, id])

  return (
    <>
    <div className="container mx-auto mt-10 mb-[350px]">
    {data !== null && data.map((res)=>{
        return(
            <div key={res.id}>
                <div className='flex border-b border-gray-400 w-1/2 pb-5'>
                    <img src={res.company_image_url} alt="thumbnail" className='h-40 w-40'/>
                    <div className="flex-col mt-1 ml-5 text-[17px]">
                        <p className='font-bold'>{res.title}</p>
                        <div className="flex gap-8">
                            <div className="flex flex-row">
                            <svg aria-hidden="true" className="mt-3 mr-1 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" fillRule="evenodd" />
                            </svg>
                                <p className='w-50 mt-3 items-center'>{res.company_name}</p>
                            </div>
                            <div className="flex flex-row">
                                <svg aria-hidden="true" className="mt-3 mr-1 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" fillRule="evenodd"></path>
                                </svg>
                                <p className='w-50 mt-3'>{res.company_city}</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <svg aria-hidden="true" className="mt-[15px] mr-1 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                                <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" fillRule="evenodd" />
                            </svg>
                            <p className='w-50 mt-3'>{handlePrice(res.salary_min)} - {handlePrice(res.salary_max)}/Bulan</p>
                        </div>
                        <div className="flex flex-row">
                            <svg aria-hidden="true" className="mt-[15px] mr-1 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" fillRule="evenodd" />
                            </svg>
                            <p className='w-50 mt-3'>{res.job_tenure}</p>
                        </div>
                        <div className="flex flex-row">
                            <svg aria-hidden="true" className="mt-[15px] mr-1 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
                                <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z" fillRule="evenodd" />
                            </svg>
                            <p className='w-50 mt-3'>{res.job_type}</p>
                        </div>
                        <div className="flex flex-row">
                            
                            <div className='w-50 mt-3'>
                                {
                                res.job_status === 1 ?
                                <div className='flex items-center'>
                                    <svg aria-hidden="true" className="mt-[5px] mr-1 w-6 h-6 text-green-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path clipRule="evenodd" d="M5.636 4.575a.75.75 0 010 1.06 9 9 0 000 12.729.75.75 0 01-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 011.06 0zm12.728 0a.75.75 0 011.06 0c4.101 4.1 4.101 10.749 0 14.85a.75.75 0 11-1.06-1.061 9 9 0 000-12.728.75.75 0 010-1.06zM7.757 6.696a.75.75 0 010 1.061 6 6 0 000 8.485.75.75 0 01-1.06 1.061 7.5 7.5 0 010-10.607.75.75 0 011.06 0zm8.486 0a.75.75 0 011.06 0 7.5 7.5 0 010 10.607.75.75 0 01-1.06-1.06 6 6 0 000-8.486.75.75 0 010-1.06zM9.879 8.818a.75.75 0 010 1.06 3 3 0 000 4.243.75.75 0 11-1.061 1.06 4.5 4.5 0 010-6.363.75.75 0 011.06 0zm4.242 0a.75.75 0 011.061 0 4.5 4.5 0 010 6.364.75.75 0 01-1.06-1.06 3 3 0 000-4.244.75.75 0 010-1.06zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" fillRule="evenodd" />
                                    </svg>
                                    <p className='text-green-500 font-semibold'>Lowongan dibuka</p>
                                </div>
                                :
                                <div className='flex items-center'>
                                    <svg aria-hidden="true" className="mt-[5px] mr-1 w-6 h-6 text-red-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M2.47 2.47a.75.75 0 011.06 0l8.407 8.407a1.125 1.125 0 011.186 1.186l1.462 1.461a3.001 3.001 0 00-.464-3.645.75.75 0 111.061-1.061 4.501 4.501 0 01.486 5.79l1.072 1.072a6.001 6.001 0 00-.497-7.923.75.75 0 011.06-1.06 7.501 7.501 0 01.505 10.05l1.064 1.065a9 9 0 00-.508-12.176.75.75 0 011.06-1.06c3.923 3.922 4.093 10.175.512 14.3l1.594 1.594a.75.75 0 11-1.06 1.06l-2.106-2.105-2.121-2.122h-.001l-4.705-4.706a.747.747 0 01-.127-.126L2.47 3.53a.75.75 0 010-1.061zm1.189 4.422a.75.75 0 01.326 1.01 9.004 9.004 0 001.651 10.462.75.75 0 11-1.06 1.06C1.27 16.12.63 11.165 2.648 7.219a.75.75 0 011.01-.326zM5.84 9.134a.75.75 0 01.472.95 6 6 0 001.444 6.159.75.75 0 01-1.06 1.06A7.5 7.5 0 014.89 9.606a.75.75 0 01.95-.472zm2.341 2.653a.75.75 0 01.848.638c.088.62.37 1.218.849 1.696a.75.75 0 01-1.061 1.061 4.483 4.483 0 01-1.273-2.546.75.75 0 01.637-.848z" fillRule="evenodd" />
                                    </svg>
                                    <p className='text-red-500 font-semibold'>Lowongan ditutup</p>
                                </div>
                                }</div>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <h1 className='font-bold text-[18px]'>Deskripsi Pekerjaan {res.title} {res.company_name}</h1>
                    <p className='font-bold text-base uppercase mt-5'>Job Description</p>
                    <p className='list-decimal mt-3 max-w-2xl'>{res.job_description}</p>
                    <p className='font-bold text-base uppercase mt-5'>Requirements:</p>
                    <p className='list-decimal mt-3 max-w-2xl'>{res.job_qualification}</p>
                </div>
            </div>
            )
        })}
    </div>
    </>
  )
}

export default DetailsPage