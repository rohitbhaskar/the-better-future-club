export interface Task {
  id: number;
  title: string;
  details: string;
  company: string;
  initials: string;
  purpose: string;
  points: number;
  createdDate: Date;
  updatedDate: Date;
  allocatedTo: string;
  status: string;
}