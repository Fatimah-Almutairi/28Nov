import { Request, Response } from "express";
import { Student , Teacher , Classroom } from '@prisma/client'
import { prisma } from '../config/db';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import {studentSchemaType, classroomSchemaType, teacherSchemaType} from '../zod.schema/school.schema'

export const getStudents = async (req: Request, res: Response) => {
    try{
        const students = await prisma.student.findMany();
        return res.status(200).json(students);
    }catch (error) {
        console.log(error)        
        res.status(500).json({
          message:"Server Error"
        });
      }
};

export const addStudent = async (req: Request, res: Response) => {
    try{
    const std = req.body as Student;
    await prisma.student.create({
        data: std
    });
    return res.status(201).json({message: "Student Added "})
    }catch(error){
        const prismaError = error as PrismaClientKnownRequestError;
        if (prismaError.code == 'P2002') {
          return res.status(400).json({
            message: 'Check The Stduent Information',
          });
        }
        return res.status(500).json({
          message: 'Server Error !',
        });
    }
};

export const getStudentId = async (req: Request, res: Response) => {
    try {
        const {id} = req.params as studentSchemaType;
        const std = await prisma.student.findUnique({
            where: {id}
        });
        return res.status(200).json(std);
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Server Error !"});
    }
};

export const studentId = async (req: Request, res: Response) => {
  
  const {id} = req.params as studentSchemaType;
  const std = await prisma.student.findUnique({
    where: {id}
  });
  if(!std) {
    return res.status(400).json({
      message: "Wrong ID"
    });
  }
  return res.status(200).json(std)
};

// ClassRoom

export const getClassroom = async (req: Request, res: Response) => {
    try{
        const classroom = await prisma.classroom.findMany();
        return res.status(200).json(classroom);
    }catch (error) {
        console.log(error)        
        res.status(500).json({
          message:"Server Error"
        });
      }
};

export const addClassroom = async (req: Request, res: Response) => {
    try{
    const clas = req.body as Classroom;
    await prisma.classroom.create({
        data: clas
    });
    return res.status(201).json({message: "Classroom Added "})
    }catch(error){
        const prismaError = error as PrismaClientKnownRequestError;
        if (prismaError.code == 'P2002') {
          return res.status(400).json({
            message: 'Check The Classroom Information',
          });
        }
        return res.status(500).json({
          message: 'Server Error !',
        });
    }
};

export const getClassroomId = async (req: Request, res: Response) => {
    try {
        const {id} = req.params as classroomSchemaType;
        const cls = await prisma.classroom.findUnique({
            where: {id}
        });
        return res.status(200).json(cls);
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Server Error !"});
    }
};

export const classroomId = async (req: Request, res: Response) => {
  
  const {id} = req.params as studentSchemaType;
  const cls = await prisma.classroom.findUnique({
    where: {id}
  });
  if(!cls) {
    return res.status(400).json({
      message: "Wrong ID"
    });
  }
  return res.status(200).json(cls)
};

// Teacher 


export const getTeachers = async (req: Request, res: Response) => {
    try{
        const teach = await prisma.teacher.findMany();
        return res.status(200).json(teach);
    }catch (error) {
        console.log(error)        
        res.status(500).json({
          message:"Server Error"
        });
      }
};

export const addTeacher = async (req: Request, res: Response) => {
    try{
    const teach = req.body as Teacher;
    await prisma.teacher.create({
        data: teach
    });
    return res.status(201).json({message: "Teacher Added "})
    }catch(error){
        const prismaError = error as PrismaClientKnownRequestError;
        if (prismaError.code == 'P2002') {
          return res.status(400).json({
            message: 'Check The Teacher Information',
          });
        }
        return res.status(500).json({
          message: 'Server Error !',
        });
    }
};

export const getTeacherId = async (req: Request, res: Response) => {
    try {
        const {id} = req.params as teacherSchemaType;
        const teach = await prisma.teacher.findUnique({
            where: {id}
        });
        return res.status(200).json(teach);
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Server Error !"});
    }
};

export const teacherId = async (req: Request, res: Response) => {
  
  const {id} = req.params as studentSchemaType;
  const teach = await prisma.teacher.findUnique({
    where: {id}
  });
  if(!teach) {
    return res.status(400).json({
      message: "Wrong ID"
    });
  }
  return res.status(200).json(teach)
};