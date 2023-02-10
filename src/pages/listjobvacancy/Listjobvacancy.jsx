import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { GlobalContext } from '../../context/GlobalContext'
import { Link } from 'react-router-dom'
import 'flowbite'

function Listjobvacancy() {
    const {data, setData, fetchStatus, setFetchStatus, handleDelete, handleEdit} = useContext(GlobalContext)
    const [filterState, setFilterState] = useState(null)
    const [search, setSearch] = useState({title : ""})
    const [filter, setFilter] = useState({
        company_city: "",
        job_type: "",
        job_tenure: ""
    })

    useEffect(()=>{

        let insertFilterState = (param)=>{
            let tmp = []
            return new Promise((resolve, reject)=>{
                param.map((res) => {
                    return tmp.push({company_city: res.company_city})
                })

                resolve(tmp)
            })
        }

        let removeDuplicate = (param) => { 
            let tmp = []
            return new Promise((resolve, reject)=>{
                for(let i of param){
                    if(tmp.indexOf(i.company_city) === -1){
                        tmp.push(i.company_city)
                    }
                }

                resolve(tmp)
            })
        }

        axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
        .then((res)=>{
            setData(res.data.data) 
        })
        .catch((error)=>{
            console.log(error.message);
        })  

        let fetchData = async() => {
            setData(null)
            let {data} = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
            let b = await insertFilterState(data.data)
            let c = await removeDuplicate(b)
            
            console.log(c);
            
            setFilterState([...c])
        }

        if(fetchStatus){
            fetchData()
            setFetchStatus(false)
        }

        setFetchStatus(false)
    },[fetchStatus, setFetchStatus,setData]) 

    const handleChangeSearch = (event) => {
        setSearch({...search, [event.target.name] : event.target.value})
        
    }

    const handleSearch = (event)=>{
        event.preventDefault()

        console.log(search);

        let fetchSearchData = async() => {
            setData(null)
            let {data} = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
            let result = data.data

            let searchData = result.filter((res)=>{
                return Object.values(res).join("").toLowerCase().includes(search.title.toLowerCase())
            })
            
            console.log(searchData);
            setData([...searchData])
        }

        fetchSearchData()
    }

    const handleChangeFilter = (event) => {
        if(event.target.value !== "Pilih Kota"){
            setFilter({...filter, [event.target.name] : event.target.value})
        }else{
            setFilter({...filter, [event.target.name] : ""})
        }
    }

    const handleFilter = (event) => {
        event.preventDefault()
        console.log(filter);

        let fetchFilterData = async() => {
            setData(null)
            let {data} = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
            let result = data.data
            console.log(result);

            let searchFilter = result.filter((res)=>{
                return res.company_city.toLowerCase() === filter.company_city.toLowerCase() ||
                res.job_type.toLowerCase() === filter.job_type.toLowerCase()||
                res.job_tenure.toLowerCase() === filter.job_tenure.toLowerCase() 
                
            })
            
            console.log(searchFilter);
            setData([...searchFilter])
        }

        fetchFilterData ()
    }
    
  return (
    <>
    <div className='flex'>
    <Sidebar/>
         <div className="container mx-auto mt-20 py-10 2xl:w-full lg:w-[1000px] md:w-[400px]">
         <h1 className='font-bold text-[25px] mb-10'>List Job Vacancy</h1>

        <div className='mb-5' id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border border-gray-200 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
                <span>Filter</span>
                <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                <div className='container mx-auto bg-gray-100 p-5 border-2'>
                    <form onSubmit={handleFilter} className="flex-row items-center mt-5">   
                        <label htmlFor="simple-filter" className="sr-only">filter</label>
                        <select name='company_city' onChange={handleChangeFilter} id="countries" className="mb-5 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Pilih Kota</option>
                            {filterState !== null && (
                                <>
                                    {filterState.map((res)=>{
                                        return (
                                            <>
                                            <option defaultValue={`${res}`}>{res}</option>
                                            </>
                                        )
                                    })}
                                </>
                            )}
                        </select>
                        <div className="relative w-full mb-5">
                            
                            <button onClick={()=>setFilter({job_type:"",job_tenure:filter.job_tenure, company_city:filter.company_city})} type='button' className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" fillRule="evenodd" />
                                </svg>
                            </button>
                            <input name='job_type' value={filter.job_type} onChange={handleChangeFilter} type="text" id="simple-search" className="bg-white border border-gray-300 py-3 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="On-site"/>
                        </div>
                        <div className="relative w-full mb-5">
                            <button onClick={()=>setFilter({job_type:filter.job_type,job_tenure:"", company_city:filter.company_city})} type='button' className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" fillRule="evenodd" />
                                </svg>
                            </button>
                            <input name='job_tenure' value={filter.job_tenure} onChange={handleChangeFilter} type="text" id="simple-search" className="bg-white border border-gray-300 py-3 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Freelance"/>
                        </div>

                        <button type="submit" className="p-2.5 px-[80px] ml-2 text-sm font-medium text-white bg-[#02a8ae] rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <span>Filter</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>

         <div className="flex flex-row justify-between items-center mb-3">
            <button className="text-white bg-[#02a8ae] hover:bg-gray-500 rounded-lg w-30 px-2 py-3 text-center">
                <div className="flex">
                    <svg aria-hidden="true" className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <Link to={'/dashboard/list-job-vacancy/form'}>Buat Data</Link>
                </div>
            </button>
            <form onSubmit={handleSearch} className="flex gap-3 items-center">   
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <button onClick={()=>setSearch({title:"", company_city:search.company_city})} type='button' className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" fillRule="evenodd" />
                        </svg>
                    </button>
                    <input name='title' value={search.title} onChange={handleChangeSearch} type="text" id="simple-search" className="bg-blue-50 border-0 py-2.5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari lowongan, "/>
                </div>
                <button type="submit" className="p-2.5 px-[80px] ml-2 text-sm font-medium text-white bg-[#02a8ae] rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <span>CARI</span>
                </button>
            </form>
         </div>
            <div className="relative overflow-x-auto">
                <table className="text-sm border-r border-l text-center text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-[#02a8ae] dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-5 py-3">
                                NO
                            </th>
                            <th scope="col" className="px-5 py-3">
                                JUDUL
                            </th>
                            <th scope="col" className="px-5 py-3">
                                DESKRIPSI
                            </th>
                            <th scope="col" className="px-5 py-3">
                                KUALIFIKASI
                            </th>
                            <th scope="col" className="px-5 py-3">
                                TIPE
                            </th>
                            <th scope="col" className="px-5 py-3">
                                MASA JABATAN
                            </th>
                            <th scope="col" className="px-5 py-3">
                                STATUS
                            </th>
                            <th scope="col" className="px-5 py-3">
                                LOGO
                            </th>
                            <th scope="col" className="px-5 py-3">
                                NAMA PERUSAHAAN
                            </th>
                            <th scope="col" className="px-5 py-3">
                                KOTA
                            </th>
                            <th scope="col" className="px-5 py-3">
                                MINIMAL GAJI
                            </th>
                            <th scope="col" className="px-5 py-3">
                                MAKSIMAL GAJI
                            </th>
                            <th scope="col" className="px-5 py-3">
                                AKSI
                            </th>
                        </tr>
                    </thead>
                            <tbody >
                    {data !== null && data.map((res,index)=>{
                        return(
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={res.id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index+1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {res.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className='truncate w-20'>
                                            {res.job_description}...
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className='truncate w-20'>
                                            {res.job_qualification}...
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.job_type}
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.job_tenure}
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.job_status}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href={res.company_image_url} className="text-blue-500" target="_blank" rel="noopener noreferrer">Click</a>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="truncate w-[100px]">
                                            {res.company_name}...
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.company_city}
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.salary_min }
                                    </td>
                                    <td className="px-6 py-4">
                                        {res.salary_max }
                                    </td>
                                    <td className="px-6 py-4 flex">
                                    <Link to='/dashboard/list-job-vacancy/form'><button onClick={handleEdit} value={res.id} className="text-white bg-yellow-300 hover:bg-gray-500 rounded-lg px-4 py-2 text-center mr-2 mb-2">Edit</button></Link>
                                    <button  onClick={handleDelete} value={res.id} className="text-white bg-red-600 hover:bg-gray-500 rounded-lg px-4 py-2 text-center mr-2 mb-2">Delete</button>
                                    </td>
                                </tr>
                        )
                    })} 
                    </tbody>
                </table>
            </div>


        </div>
    </div>
    </>
  )
}

export default Listjobvacancy