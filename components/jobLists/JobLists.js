"use client"

import { useState, useEffect } from "react"
import JobGrid from "./JobGrid"

export default function JobLists(){
  const [jobDetails, setJobDetails] = useState([]);

  useEffect(() => {
    fetch('/api/postjobs')
      .then((res) => res.json())
      .then(setJobDetails)
      .catch((err) => console.error('Failed to fetch jobs:', err));
  }, []);

  return <JobGrid jobs={jobDetails} />;
 }