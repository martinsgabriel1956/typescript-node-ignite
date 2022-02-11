interface CreateCourseTypeProps {
  name: string;
  duration?: number;
  educator: string;
};

class CreateCourseService {
  execute({ name, duration = 8, educator } : CreateCourseTypeProps) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService()