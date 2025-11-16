export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

export interface Project {
  id: number;
  name: string;
  client: string;
  division: string; // Digital, Creative, Smart Devices, Web3
  status: string; // Active, Completed, On Hold
  createdAt: string;
  progress: number; // 0-100
}

export interface Employee {
  id: number;
  name: string;
  email: string;
  division: string; // Digital, Creative, Smart Devices
  role: string;
  joinedAt: string;
}
