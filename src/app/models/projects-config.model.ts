export interface ProjectsPageContentModel {
  title: string;
  description: string;
  heading: string;
  projects: ProjectModel[];
}

export interface ProjectModel {
  url: string;
  title: string;
  description: string;
  thumbnail: string;
}
