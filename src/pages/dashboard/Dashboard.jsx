import Sidebar from '../../components/sidebar/Sidebar'
import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
    <div className="flex">
        <Sidebar/>
        <div className="container mx-auto mt-32 py-10 2xl:w-full lg:w-[1000px] md:w-[400px]">
            <p className='font-semibold ml-5'>Menu Dashboard</p>

            <div className='flex'>
              <div className='flex gap-5 bg-white w-full p-5'>
                  <Link to={'/dashboard/list-job-vacancy'}>
                    <div className="flex flex-row bg-white border border-gray-300 w-60 p-5 text-left rounded">
                      <svg aria-hidden="true" className="mr-3 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M6 4.75A.75.75 0 016.75 4h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 4.75zM6 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 10zm0 5.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zM1.99 4.75a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 15.25a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 10a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V10z" fillRule="evenodd" />
                      </svg>
                      <p>List Job Vacancy</p>
                    </div>
                  </Link>
                  <Link to={'/dashboard/list-job-vacancy/form'}>
                    <div className="flex flex-row bg-white border border-gray-300 w-60 p-5 text-left rounded">
                        <svg aria-hidden="true" className="mr-3 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z" />
                        </svg>
                        <p>Add New Job</p>
                    </div>
                  </Link>
                  <Link to={'/dashboard/profile'}>
                    <div className="flex flex-row bg-white border border-gray-300 w-60 p-5 text-left rounded">
                      <svg aria-hidden="true" className="mr-3 flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        <p>Profile</p>
                    </div>
                  </Link>
                  <Link to={'/dashboard/change-password'}>
                    <div className="flex flex-row bg-white border border-gray-300 w-60 p-5 text-left rounded">
                        <svg aria-hidden="true" className="mr-3 flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path clipRule="evenodd" d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z" fillRule="evenodd" />
                        </svg>
                        <p>Change Password</p>
                    </div>
                  </Link>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard