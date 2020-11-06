import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobById, Job } from "../../api/apiMock";

const JobDetails: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [job, setJob] = useState<Job>();
  useEffect(() => {
    (async () => {
      const job = await getJobById(parseInt(jobId, 10));
      setJob(job);
    })();
  }, [jobId]);

  const result = job ? (
    <div className="jobContainer">
      <div className="jobTitle">{job.title}</div>
      <div className="jobDescription">{job.description}</div>
      <div className="jobEmploymentType">{job.employment_type}</div>
    </div>
  ) : (
    <div>Job of this id doesn't exist</div>
  );

  return <>{result}</>;
};

export default JobDetails;
