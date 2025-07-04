
import FullJobDetails from "@/components/jobLists/FullJobDetails";
import { notFound, redirect } from "next/navigation";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default async function JobDetailsPage({ params }) {
  const { jobSlug } = params;

  const res = await fetch(`${baseURL}/api/postjobs/${jobSlug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    redirect("/"); 
  }

  const jobData = await res.json();

  jobData.requirements = jobData.requirements?.replace(/\n/g, "<br/>") || "";
  jobData.benefits = jobData.benefits?.replace(/\n/g, "<br/>") || "";

  return (
    <FullJobDetails
      jobData={jobData}
      jobRequirements={jobData.requirements}
      jobBenefits={jobData.benefits}
    />
  );
}

export async function generateMetadata({ params }) {
  const { jobSlug } = params;

  try {
    const res = await fetch(`${baseURL}/api/postjobs/${jobSlug}`);
    if (!res.ok) {
      return {
        title: "Job Not Found",
        description: "This job could not be found.",
      };
    }

    const jobData = await res.json();

    return {
      title: jobData.jobtitle,
      description: jobData.description,
    };
  } catch (err) {
    return {
      title: "Error",
      description: "Failed to load job metadata",
    };
  }
}
