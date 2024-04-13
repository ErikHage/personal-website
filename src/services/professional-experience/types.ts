export interface WorkData {
  companyName: string,
  companyLogo? : string,
  jobTitles: JobTitle[],
  summary: string,
  projects: Project[],
}

export interface JobTitle {
  title: string,
  tenure: string,
}

export interface Project {
  title: string,
  summary: string,
  skillsUsed: string[],
}
