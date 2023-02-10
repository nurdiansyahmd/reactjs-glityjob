import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Sidebar from '../sidebar/Sidebar'

function Form() {
  const {input, handleInput, handleSubmit} = useContext(GlobalContext)

  return (
    <>
    <div className="flex">
    <Sidebar/>
      <div className="container mx-auto max-w-3xl mt-[100px] py-10 2xl:w-full lg:w-[1000px] md:w-[400px]">
        <h1 className='font-bold text-[25px] border-b  mb-10'>Add New Job</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="title" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Judul</label>
              <input onChange={handleInput} value={input.title} name='title' type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="frontend developer" required/>
            </div>
            <div className="mb-6">
              <label htmlFor="company_name" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Nama Perusahaan</label>
              <input onChange={handleInput} value={input.company_name} name='company_name' type="text" id="company_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Google' required/>
            </div>
            <div className="flex gap-10">
              <div className="flex-1 mb-6">
                <div className="mb-6">
                  <label htmlFor="company_city" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Kota</label>
                  <input onChange={handleInput} value={input.company_city} name='company_city' type="text" id="company_city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Jakarta' required/>
                </div>
                <div className="mb-6">
                  <label htmlFor="job_type" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Tipe</label>
                  <input onChange={handleInput} value={input.job_type} name='job_type' type="text" id="job_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='onsite/wfh/hybrid' required/>
                </div>
                <div className="mb-6">
                  <label htmlFor="job_tenure" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Masa Jabatan</label>
                  <input onChange={handleInput} value={input.job_tenure} name='job_tenure' type="text" id="job_tenure" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='kontrak, magang dll' required/>
                </div>
                <div className="mb-6">
                  <label htmlFor="salary_min" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Gaji Minimum</label>
                  <input onChange={handleInput} value={input.salary_min} name='salary_min' type="number" id="salary_min" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='6000000' required/>
                </div>
                <div className="mb-6">
                  <label htmlFor="salary_max" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Gaji Maksimum</label>
                  <input onChange={handleInput} value={input.salary_max} name='salary_max' type="number" id="salary_max" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='10000000' required/>
                </div>
              </div>
              <div className="flex-1 mb-6">
                <div className="mb-6">
                  <label htmlFor="job_status" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Status</label>
                  <input onChange={handleInput} value={input.job_status} name='job_status' type="number" id="job_status" min={0} max={1} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Contoh: 0 untuk Ditutup, 1 untuk Dibuka' required/>
                </div>
                <div className="mb-6">
                  <label htmlFor="job_description" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Deskripsi Pekerjaan</label>
                  <textarea rows={3} onChange={handleInput} value={input.job_description} name='job_description' type="text" id="job_description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='melakukan implementasi tampilan web' required/>
                </div>
                <div className="mb-6">
                  <label htmlFor="job_qualification" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Kualifikasi Pekerjaan</label>
                  <textarea rows={2} onChange={handleInput} value={input.job_qualification} name='job_qualification' type="text" id="job_qualification" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='harus bisa React' required/>
                </div>
                <div className="mb-6">
                  <label htmlFor="company_image_url" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Logo Perusahaan</label>
                  <input onChange={handleInput} value={input.company_image_url} name='company_image_url' type="text" id="company_image_url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='image link address' required/>
                </div>
              </div>
            </div>
            <button type="submit" className="text-white bg-[#02a8ae] hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-gray-100 dark:focus:ring-blue-800">Tambah data</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form