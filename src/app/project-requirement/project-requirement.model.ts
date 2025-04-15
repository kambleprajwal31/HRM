export interface Department {
  id: number;
  name: string;
  deleted: boolean;
}

export interface ProjectRequirement {
  id: number;
  department: Department;
  details: string;
  resourceRequired: number;
  jobDescriptionPath: string;
  deleted: boolean;
}
