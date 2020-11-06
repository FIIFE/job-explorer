export interface Job {
  id: number;
  title: string;
  description: string;
  employment_type: "pełny_etat" | "b2b";
}

const jobs: Array<Job> = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "React Developer poszukiwany ze znajomością JS",
    employment_type: "pełny_etat",
  },
  {
    id: 2,
    title: "Backend Developer",
    description: "Backend Developer poszukiwany ze znajomością nodejs",
    employment_type: "b2b",
  },
  {
    id: 3,
    title: "Fullstack Developer",
    description: "Fullstack Developer poszukiwany ze znajomością JS",
    employment_type: "pełny_etat",
  },
  {
    id: 4,
    title: "Tester",
    description: "Tester poszukiwany ze znajomością Selenium",
    employment_type: "b2b",
  },
];

export const getJobs = (): Promise<Array<Job>> => {
  return Promise.resolve(jobs);
};

export const getJobById = (jobId: number): Promise<Job | undefined> => {
  const job = jobs.find((job) => job.id === jobId);
  return Promise.resolve(job);
};
