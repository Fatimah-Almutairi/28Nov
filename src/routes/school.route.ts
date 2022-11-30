import express from 'express'
import { addClassroom, addStudent, addTeacher, getClassroom, getClassroomId, getStudentId, getStudents, getTeacherId, getTeachers } from '../controller/school.controller';
import validate from '../middleware/validate';
import { classroomSchema, studentSchema, teacherSchema } from '../zod.schema/school.schema';

const router = express.Router();

router.get('/student',getStudents);
router.post ('/student', validate (studentSchema), addStudent);
router.get('/student/:id', validate(studentSchema), getStudentId)
router.get ('/classroom', getClassroom);
router.post ('/classroom', validate(classroomSchema), addClassroom);
router.get ('/classroom/:id', validate(classroomSchema), getClassroomId);
router.post ('/teacher', getTeachers);
router.post ('/teacher', validate(teacherSchema), addTeacher);
router.post ('/teacher/:id', validate(teacherSchema), getTeacherId);



export default router;