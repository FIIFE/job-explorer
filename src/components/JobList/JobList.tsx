import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getJobs, Job } from "../../api/apiMock";

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<Array<Job>>([]);
  useEffect(() => {
    (async () => {
      const jobs = await getJobs();
      setJobs(jobs);
    })();
  }, []);

  return (
    <div>
      <h1>List of jobs</h1>
      <ul>
        {jobs.map((job) => (
          <Link to={`/${job.id}`} key={job.id}>
            <li>{job.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
