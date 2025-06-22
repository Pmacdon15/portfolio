export interface Education {
    school: string;
    program: string;
    gpa?: string;
    graduation?: string;
};

export interface Skills {
    index: number;
    description: string;
}

export interface Certification {
    name: string;
    issuer: string;
};

export interface Work {
    index: number;
    company: string;
    position: string;
    dates: string;
    responsibilities: string[];
};

export interface Project {
  companyName?: string;
  name: string;
  description: string;
  link?: string;
  keyFeatures: string[];
}