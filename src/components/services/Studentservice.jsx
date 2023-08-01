import axios from 'axios';
const STUDENT_BASE_URL="http://localhost:8090/student_information_service/v1/student";
class Studentservice{
    getStudentById(studentId){
        try {return axios.get(STUDENT_BASE_URL+'/'+studentId);}
        catch (error){
                throw new Error("Student ID not found in the database.");
        }
        
    }

    getAllStudents() {
        return axios.get(STUDENT_BASE_URL);
      }

    createStudent(student){
        return axios.post(STUDENT_BASE_URL,student);
    }

}
export default new Studentservice();