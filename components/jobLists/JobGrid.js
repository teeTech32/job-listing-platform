"use client"

import JobItem from "./JobItem";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function JobGrid({jobs}){
  const [filterCompany, setFilterCompan] = useState('')

  const filtername = filterCompany ? jobs.filter((job) => job.companyname.toLowerCase().includes(filterCompany.toLocaleLowerCase()
  )) : jobs

function handleOnchange(e){
  setFilterCompan(e.target.value)
}
  
  return<>
          <div className="lg:float-right lg:absolute lg:top-60 right-10 xl:right-6">
            <div className="mx-5 my-2 flex flex-col ml-10 ">
                <label htmlFor="jobTitle" className="text-gray-400 text-xs md:text-sm xl:text-lg font-semibold mb-1">QUICK SEARCH</label>
                <div className="relative z-10">
                  <input type="text" value={filterCompany} placeholder="Use companyName" onChange={handleOnchange} className="w-70 py-2 pl-7 pr-2 bg-gray-900 rounded-sm text-white text-xs md:text-sm " />
                  <IoIosSearch className="text-white absolute top-2 left-2"/>
                </div>
              </div>
          </div>
          <ul className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filtername.map((job)=>(
                    <li key={job.id}>
                      <JobItem {...job}/>
                    </li>
                  ))}
          </ul>
        </>
}