import { Projects } from '@/models';

export const getProjects = async () => {
  return await Projects.findAll();
};

export const createProject = async (data: any) => {
  return await Projects.create(data);
};
