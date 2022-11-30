"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherId = exports.getTeacherId = exports.addTeacher = exports.getTeachers = exports.classroomId = exports.getClassroomId = exports.addClassroom = exports.getClassroom = exports.studentId = exports.getStudentId = exports.addStudent = exports.getStudents = void 0;
const db_1 = require("../config/db");
const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield db_1.prisma.student.findMany();
        return res.status(200).json(students);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
});
exports.getStudents = getStudents;
const addStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const std = req.body;
        yield db_1.prisma.student.create({
            data: std
        });
        return res.status(201).json({ message: "Student Added " });
    }
    catch (error) {
        const prismaError = error;
        if (prismaError.code == 'P2002') {
            return res.status(400).json({
                message: 'Check The Stduent Information',
            });
        }
        return res.status(500).json({
            message: 'Server Error !',
        });
    }
});
exports.addStudent = addStudent;
const getStudentId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const std = yield db_1.prisma.student.findUnique({
            where: { id }
        });
        return res.status(200).json(std);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error !" });
    }
});
exports.getStudentId = getStudentId;
const studentId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const std = yield db_1.prisma.student.findUnique({
        where: { id }
    });
    if (!std) {
        return res.status(400).json({
            message: "Wrong ID"
        });
    }
    return res.status(200).json(std);
});
exports.studentId = studentId;
// ClassRoom
const getClassroom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const classroom = yield db_1.prisma.classroom.findMany();
        return res.status(200).json(classroom);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
});
exports.getClassroom = getClassroom;
const addClassroom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clas = req.body;
        yield db_1.prisma.classroom.create({
            data: clas
        });
        return res.status(201).json({ message: "Classroom Added " });
    }
    catch (error) {
        const prismaError = error;
        if (prismaError.code == 'P2002') {
            return res.status(400).json({
                message: 'Check The Classroom Information',
            });
        }
        return res.status(500).json({
            message: 'Server Error !',
        });
    }
});
exports.addClassroom = addClassroom;
const getClassroomId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const cls = yield db_1.prisma.classroom.findUnique({
            where: { id }
        });
        return res.status(200).json(cls);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error !" });
    }
});
exports.getClassroomId = getClassroomId;
const classroomId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cls = yield db_1.prisma.classroom.findUnique({
        where: { id }
    });
    if (!cls) {
        return res.status(400).json({
            message: "Wrong ID"
        });
    }
    return res.status(200).json(cls);
});
exports.classroomId = classroomId;
// Teacher 
const getTeachers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teach = yield db_1.prisma.teacher.findMany();
        return res.status(200).json(teach);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
});
exports.getTeachers = getTeachers;
const addTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teach = req.body;
        yield db_1.prisma.teacher.create({
            data: teach
        });
        return res.status(201).json({ message: "Teacher Added " });
    }
    catch (error) {
        const prismaError = error;
        if (prismaError.code == 'P2002') {
            return res.status(400).json({
                message: 'Check The Teacher Information',
            });
        }
        return res.status(500).json({
            message: 'Server Error !',
        });
    }
});
exports.addTeacher = addTeacher;
const getTeacherId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const teach = yield db_1.prisma.teacher.findUnique({
            where: { id }
        });
        return res.status(200).json(teach);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error !" });
    }
});
exports.getTeacherId = getTeacherId;
const teacherId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const teach = yield db_1.prisma.teacher.findUnique({
        where: { id }
    });
    if (!teach) {
        return res.status(400).json({
            message: "Wrong ID"
        });
    }
    return res.status(200).json(teach);
});
exports.teacherId = teacherId;
