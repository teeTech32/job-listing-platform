"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function PostJob(){
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [visibleMessage, setVisibleMessage]= useState('')
  const [inputData, setInputData] = useState({
    companyname:'',
    jobtitle:'',
    location:'',
    salaryrange:'',
    jobtype:'',
    discription:'',
    requirements:'',
    benefits:'',
    howtoapply:''
  })

  const {companyname, jobtitle, location, salaryrange, jobtype, description, requirements, benefits, howtoapply} = inputData

  function handleOnchange (e){
    setInputData({
      ...inputData, [e.target.id]: e.target.value
    })
  }
  async function handleOnSubmi(e){
    try{
      e.preventDefault()
      setIsPending(true)
      if(!companyname || !jobtitle || !location || !salaryrange || !jobtype || !description || !requirements || !benefits || !howtoapply){
        setIsPending(false)
        setVisibleMessage('Something went wrong, check your inputs.')
        setTimeout(()=>{
          setVisibleMessage('')
        },5000)
      }else{
        const jobDetails = {
          companyname: companyname,
          jobtitle: jobtitle,
          location: location,
          salaryrange: salaryrange,
          jobtype: jobtype,
          description: description,
          requirements: requirements,
          benefits: benefits,
          howtoapply: howtoapply
        }
        await fetch("http://localhost:3000/api/postjobs",{
          method: "POST",
          body: JSON.stringify(jobDetails),
          headers: {"Content-Type":"application/json"}
        })
        router.push('/')
      }
    }catch(error){
      if(error.response){
        console.log(error.response)
        setVisibleMessage(error.message)
        setIsPending(false)
      } 
    }
  }
 
  return<>
          <header>
            <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-400 to-yellow-300 text-xl md:text-2xl xl:text-3xl font-extrabold leading-10 mt-35 lg:mt-50">
              POST JOB FORM 
            </h1>
          </header>
          <main className="relative mx-10 mb-50">
            <form onSubmit={handleOnSubmi} >
              <div className="flex flex-col md:flex-row">
                <p className="mx-5  my-2">
                  <label htmlFor="companyName" className="text-gray-400 text-xs md:text-sm xl:text-lg font-semibold">COMPANY NAME</label>
                  <input type="text" required name="companyname" id="companyname" value={companyname} onChange={handleOnchange} className="w-full p-2 bg-gray-900 rounded-sm text-white text-xs md:text-sm relative z-10"  />
                </p>
                <p className="mx-5 my-2">
                  <label htmlFor="jobTitle" className="text-gray-400 text-xs md:text-sm xl:text-lg font-semibold">JOB TITLE</label>
                  <input type="text" required name="jobtitle" id="jobtitle" value={jobtitle} onChange={handleOnchange} className="w-full p-2 bg-gray-900 rounded-sm text-white text-xs md:text-sm relative z-10" />
                </p>
              </div>
              <p className="mx-5 my-2 flex flex-col">
                <label htmlFor="location" className="text-gray-400 text-xs md:text-sm xl:text-lg font-semibold">LOCATION</label>
                <select type="text" required name="location" id="location" value={location} onChange={handleOnchange} className="w-full md:w-75 xl:w-84  p-2 bg-gray-900 rounded-sm text-white text-xs md:text-sm">
                  <option value=""></option>
                  <option value="Remote">Remote</option>
                  <option value="On-Site">On-Site</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </p>
              <p className="mx-5 my-2">
                <label htmlFor="salaryRange" className="text-gray-400 text-xs md:text-sm xl:text-lg font-semibold">SALARY RANGE</label>
                <input type="text" required name="salaryrange" id="salaryrange" value={salaryrange} onChange={handleOnchange} placeholder="salary #/month" className="w-full p-2 bg-gray-900 rounded-sm text-white text-xs md:text-sm" />
              </p>
              <p className="mx-5 my-2">
                <label htmlFor="jobType" className="text-gray-400 text-xs md:text-sm xl:text-lg font-semibold">JOB TYPE</label>
                <select type="text" required name="jobtype" id="jobtype" value={jobtype} onChange={handleOnchange} className="w-full p-2 bg-gray-900 rounded-sm text-white text-xs md:text-sm">
                  <option value=""></option>
                  <option value="FullTime">FullTime</option>
                  <option value="PartTime">PartTime</option>
                  <option value="Contract">Contract</option>
                </select>
              </p>
              <p className="mx-5 mt-2">
                <label htmlFor="Descriptions" className="text-gray-400 text-xs md:text-sm xl:text-lg font-semibold">DESCRIPTION</label>
                <textarea type="text" 
                          required 
                          rows={5}
                          name="description" 
                          id="description"
                          value={description} 
                          onChange={handleOnchange} 
                          className="bg-gray-900 rounded-sm text-white w-full text-xs md:text-sm p-2"/>      
              </p>
              <p className="mx-5 mt-2">
                <label htmlFor="Requirements" className="text-gray-400 text-xs md:text-sm xl:text-lg font-semibold">REQUIREMENTS</label>
                <textarea type="text" 
                          required 
                          rows={5}
                          name="requirements" 
                          id="requirements"
                          value={requirements} 
                          onChange={handleOnchange} 
                          className="bg-gray-900 rounded-sm text-white w-full text-xs md:text-sm p-2"/>      
              </p>
              <p className="mx-5 mt-2">
                <label htmlFor="Benefits" className="text-gray-400 text-xs md:text-sm xl:text-lg font-semibold">BENEFITS</label>
                <textarea type="text" 
                          required 
                          rows={5}
                          name="benefits" 
                          id="benefits" 
                          value={benefits} onChange={handleOnchange}
                          className="bg-gray-900 rounded-sm text-white w-full text-xs md:text-sm p-2"/>      
              </p>
              <p className="mx-5 mt-2">
                <label htmlFor="howToapply" className="text-gray-400 text-xs md:text-sm xl:text-lg font-semibold">HOW TO APPLY</label>
                <textarea type="text" 
                          required 
                          rows={3}
                          name="howtoapply" 
                          id="howtoapply" 
                          value={howtoapply} onChange={handleOnchange}
                          className="bg-gray-900 rounded-sm text-white w-full text-xs md:text-sm p-2"/>      
              </p>
              <p className="mx-5 my-10">
                <button  type="submit" disabled={isPending} className={`text-white font-semibold text-xs md:text-sm xl:text-lg bg-gradient-to-l from-red-700 via-yellow-400 to-orange-400 p-1 rounded-md cursor-pointer float-end  hover:text-red-500 hover:transition-1000 duration-500 hover:scale-105`}>{isPending ? "Posting..." : "Post Job"}</button>
              </p>
              <div className="mt-20">
                {visibleMessage && <p className="bg-red-600 p-2 mx-10 md:mx-20 rounded-md text-white text-center text-sm md:text-lg xl:text-xl font-bold my-15 md:mt-10 ">{visibleMessage}</p>}
              </div>
            </form> 
          </main>
        </>
}