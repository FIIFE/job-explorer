import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getJobs, { Job } from "../../api/apiMock";

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<Array<Job>>([]);
  useEffect(() => {
    (async () => {
      const jobs = await getJobs();
      setJobs(jobs);
    })();
  }, []);

  return (
    <>
      {jobs.map((job) => (
        <Link to={`/${job.id}`} key={job.id}>
          <div className="jobTitle">{job.title}</div>
        </Link>
      ))}
    </>
  );
};

export default JobList;
