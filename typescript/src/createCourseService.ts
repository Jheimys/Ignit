interface Courser{
    name:string,
    duration?: number,
    educator:string
}
class createCourseService {
    execute({name, duration = 8, educator}: Courser) {
        console.log(name, duration, educator)
    }
}

export default new createCourseService()