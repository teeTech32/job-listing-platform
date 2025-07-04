import { Suspense } from "react"
import JobLists from "@/components/jobLists/JobLists"

export const metadata = {
  title: 'Various available jobs',
  description:'A page that displays all posted jobs'
}

export default function HomePage(){
  return<>
          <header className="m-5 flex flex-col md:flex-row lg:gap-10">
            <div>
              <h1 className="text-white font-extrabold text-xl md:text-3xl xl:text-5xl mx-5 mt-25 lg:mt-55 md:mb-4 xl:mb-6 mb-2">
                Great Jobs,{' '}
                <span className="text text-transparent bg-clip-text bg-gradient-to-l from-red-600 to-orange-400">created by you</span>
              </h1>
              <p className="text-white text-xs md:text-sm xl:text-lg mx-5 my-2 md:my-3 xl:my-4">
                Choose and view any job details of your choice here.
              </p>
            </div>
          </header>
          <Suspense fallback={<div className="flex justify-center">
             <p className="text-white font-extrabold text-sm md:text-xl xl:text-2xl mt-20">Fetching Jobs...</p>
             </div>}>
             <JobLists/>
          </Suspense>
        </>
      }