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
    <div>
      <h1>Job details</h1>
      <div>
        <strong>Title -</strong> {job.title}
      </div>
      <div>
        <strong>Description -</strong> {job.description}
      </div>
      <div>
        <strong>Employment type -</strong> {job.employment_type}
      </div>
    </div>
  ) : (
    <div>Job of this id doesn't exist</div>
  );

  return <>{result}</>;
};

export default JobDetails;
