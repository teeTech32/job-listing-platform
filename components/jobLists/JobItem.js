import Link from "next/link"

export default function JobItem({id, companyname, jobtitle, location, salaryrange}){

  return<article className="hover:animate-pulse duration-1000 " >
          <div className="flex justify-center">
            <div className="text-white bg-amber-500 relative pb-10 w-80 md:w-70 rounded-md">
              <p className="text-black text-xs font-semibold p-3">
                Company Name: <span className="text-white text-xs font-stretch-50% md:text-sm mt-2 ml-2">{companyname}</span>
              </p>
              <p className="text-black text-xs font-semibold px-3">
                Job Title: <span className="text-white text-xs font-stretch-50% md:text-sm mt-2 ml-2">{jobtitle}</span>
              </p>
              <p className="text-black text-xs font-semibold p-3">
                Location: <span className="text-white text-xs font-stretch-50% md:text-sm mt-2 ml-2">{location}</span>
              </p>
              <p className="text-black text-xs font-semibold px-3">
                Salary Range: <span className="text-white text-xs font-stretch-50% md:text-sm mt-2 ml-2">{salaryrange}</span>
              </p>
              <div className="bg-gradient-to-r from-yellow-300 via-red-600 to-orange-400 rounded-md  mt-2 ml-2 mr-2 absolute bottom-2 right-2 hover:text-amber-300 hover:transition-1000 hover:scale-105 duration-500 px-1">
                <Link href={`/jobs/${id}`} className="w-20 text-xs relative z-50 ">
                  Veiw Details
                </Link>
              </div>
            </div>
          </div>
        </article>
} 