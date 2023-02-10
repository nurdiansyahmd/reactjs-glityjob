import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import { GlobalContext } from '../../context/GlobalContext'
import { useState } from 'react'
import axios from 'axios'
import 'flowbite'

TimeAgo.addLocale(en)

function Jobvacancy() {
    const {data, setData, handlePrice, fetchStatus, setFetchStatus} = useContext(GlobalContext)
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
            
            // console.log(c);
            
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
    <div className="container mx-auto">
        <form onSubmit={handleSearch} className="flex gap-3 items-center mt-5 max-sm:px-5 max-sm:gap-0">   
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
                <input name='title' value={search.title} onChange={handleChangeSearch} type="text" id="simple-search" className="bg-blue-50 border-0 py-3 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari lowongan"/>
            </div>
            <button type="submit" className="p-2.5 px-[80px] ml-2 text-sm font-medium text-white bg-[#02a8ae] rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-sm:px-[20px]">
                <span>CARI</span>
            </button>
        </form>

        <div className="flex max-sm:flex-col max-sm:px-12">
            <aside className="w-80 mt-10" aria-label="Sidebar">
                <div id="accordion-collapse" data-accordion="collapse">
                    <h2 id="accordion-collapse-heading-1">
                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border border-gray-200 focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                        <span>Filter Pencarian</span>
                        <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                        <div className="h-[300px] p-3 overflow-y-auto rounded border bg-white dark:bg-gray-800">
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
                                    <input name='job_type' value={filter.job_type} onChange={handleChangeFilter} type="text" id="simple-search" className="bg-orange-50 border border-gray-300 py-3 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="On-site"/>
                                </div>
                                <div className="relative w-full mb-5">
                                    <button onClick={()=>setFilter({job_type:filter.job_type,job_tenure:"", company_city:filter.company_city})} type='button' className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" fillRule="evenodd" />
                                        </svg>
                                    </button>
                                    <input name='job_tenure' value={filter.job_tenure} onChange={handleChangeFilter} type="text" id="simple-search" className="bg-orange-50 border border-gray-300 py-3 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Freelance"/>
                                </div>

                                <button type="submit" className="p-3 w-full text-sm font-medium text-white bg-[#02a8ae] rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <span>Filter</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </aside>
            <div className='container mx-auto p-10 max-sm:p-0 max-sm:mt-5'>
                <div className="flex flex-wrap gap-5">
                    {data !== null && data.map((res)=>{
                    return(
                        <div key={res.id}>
                        <Link to={`/job-vacancy/${res.id}`} className="block 2xl:w-[500px] 2xl:h-[270px] lg:w-[450px] p-6 border border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">  
                            <div className="flex">
                                <div className="flex-col">
                                    <img src={res.company_image_url} alt="company-thumb" className='2xl:h-20 2xl:w-20 mr-3 lg:h-20 lg:w-20 md:w-16 max-sm:w-16' />
                                </div>
                                <div className="flex-row">
                                    <h2 className="mb-2 text-md tracking-tight text-gray-900 dark:text-white">{res.title}</h2> 
                                    <h2 className="mb-2 text-green-500 tracking-tight text-gray-900 dark:text-white">{res.company_name}</h2> 
                                </div>
                            </div>
                            <h2 className="flex mb-2 gap-1 text-sm mt-3 tracking-tight dark:text-white">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" fillRule="evenodd" />
                                </svg>
                                {res.company_city}
                            </h2>
                            <p className='flex w-62 text-sm gap-1'>
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                                    <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" fillRule="evenodd" />
                                </svg>
                                {handlePrice(res.salary_min)} - {handlePrice(res.salary_max)}
                            </p>
                            <p className='flex w-50 mt-2 text-sm gap-1 '>
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" fillRule="evenodd" />
                                </svg>
                                {res.job_tenure}
                            </p>
                            <p className='w-50 mt-10 text-sm text-green-500'><ReactTimeAgo date={Date.parse(res.updated_at)} locale="en"/></p>
                            
                        </Link>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Jobvacancy