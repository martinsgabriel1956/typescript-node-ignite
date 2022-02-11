import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export const createCourse = (request: Request, response: Response) => {
  CreateCourseService.execute({
    name: "React",
    duration: 4,
    educator: "Dani",
  });
  
  CreateCourseService.execute({
    name: "NodeJS",
    duration: 6,
    educator: "Filipe",
  });

  return response.send();
};
