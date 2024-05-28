export interface Project {
  title: string;
  tags: string[];
  description: string;
  live?: string;
  source?: string;
}

export interface FeaturedProject extends Project {
  mobile: boolean;
}
