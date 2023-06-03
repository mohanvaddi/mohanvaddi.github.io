export interface Experience {
	companyName: string;
	roles: { role: string; period: string }[];
	description: string[];
}

export interface Project {
	name: string;
	description: string;
	links: { name: string; link: string }[];
}

export interface Education {
  universityName: string;
  qualification: string;
  stream: string;
  period: string;
  description: string[];
};
