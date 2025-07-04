"use server"

import FullJobDetails from "@/components/jobLists/FullJobDetails"
import { notFound, redirect } from "next/navigation"

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
export default async function JobDetailsPage({params}){
  const {jobSlug} = await params;
  
  const job = await fetch(`${baseURL}/api/postjobs/${jobSlug}`);
  
  if(!job.ok){
    notFound(),
    setTimeout(()=>{
      redirect('/')
    },5000)
  }
  const jobData = await job.json()

    jobData.requirements =  jobData.requirements.replace(/\n/g, '<br/>')
    jobData.benefits = jobData.benefits.replace(/\n/g, '<br/>')
  return<FullJobDetails jobData={jobData} jobRequirements={jobData.requirements} jobBenefits={jobData.benefits}  />
}

export async function generateMetadata({params}){
  const {jobSlug} = await params;
  const job = await fetch(`http://localhost:3000/api/postjobs/${jobSlug}`)
  const jobData = await job.json()
  return{
    title:jobData.jobtitle,
    description:jobData.description,
  }
}
