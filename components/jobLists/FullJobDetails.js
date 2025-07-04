"use client"
import { TiDelete } from "react-icons/ti";
import Link from "next/link";

export default function FullJobDetails({jobData, jobRequirements, jobBenefits }){
  
  return<div className="bg-black/15 mt-35 lg:mt-45 relative">
          <Link href={'/'} className="absolute top-4 right-5 md:right-10 xl:right-20 cursor-pointer z-10">
            <TiDelete className="text-white hover:text-red-600 text-2xl md:text-3xl xl:text-4xl cursor-pointer"  />
          </Link>
          <header className="flex flex-col my-2 md:my-4 xl:my-6 md:ml-8">
            <div className="md:ml-5 mx-10 ">
              <h1 className="text-white text-sm md:text-lg flex justify-center mx-10 my-5 ">
                {jobData.companyname}
              </h1>
              <p className="text-white text-sm font-extrabold  md:text-2xl xl:text-3xl">   
                {jobData.jobtitle}
              </p> 
              <p className="text-white font-bold text-sm md:text-lg xl:text-xl mt-3" >
                {jobData.location}
              </p>
              <p className="text-white font-light text-xs md:text-sm xl:text-lg mt-3">
                {jobData.jobtype}
              </p>
              <p className="text-white font-light text-xs md:text-sm xl:text-lg mt-3">
                {jobData.salaryrange}
              </p>
            </div>
          </header>
          <main className="flex flex-col mx-10 xl:mx-15 mb-15 rounded-md">
            <div>
              <h2 className="text-white text-sm md:text-lg xl:text-xl font-extrabold mx-5 mt-5 md-2">Job Description:</h2>
              <p className="text-white text-xs md:text-sm xl:text-lg  mx-5 mb-5" >
              {jobData.description}
              </p>
            </div>
            <div>
              <h2 className="text-white text-sm md:text-lg xl:text-xl font-extrabold mx-5 md-2">Job Requirements:</h2>
              <p className="text-white text-xs md:text-sm xl:text-lg  mx-5 mb-5" dangerouslySetInnerHTML={{
                __html:jobRequirements
              }}></p> 
            </div>
            <div>
              <h2 className="text-white text-sm md:text-lg xl:text-xl font-extrabold mx-5  md-2">Benefits:</h2>
              <p className="text-white text-xs md:text-sm xl:text-lg  mx-5 mb-5" dangerouslySetInnerHTML={{
                __html:jobBenefits
              }}></p>
            </div>
            <div>
              <p className="text-white text-xs md:text-sm xl:text-lg  mx-5 mb-5">
                {jobData.howtoapply}
              </p>
            </div> 
          </main>
        </div> 

}