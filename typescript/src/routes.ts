import { Request, Response, response } from "express";
import createCourseService from "./createCourseService";

export function createCourse(req:Request, res: Response) {
    createCourseService.execute({
        name:'NodeJS', 
        duration:10, 
        educator:"Dani"
    })

    createCourseService.execute({
        name:'React', 
        educator:"Diego"
    })

    return response.send
}