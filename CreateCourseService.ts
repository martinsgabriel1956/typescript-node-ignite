interface CreateCourseTypeProps {
  name: string;
  duration: number;
  educator: string;
};

class CreateCourseService {
  execute({ name, duration, educator } : CreateCourseTypeProps) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService()