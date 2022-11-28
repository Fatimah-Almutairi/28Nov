import { Request, Response } from "express";
import { Users } from '@prisma/client';
import { prisma } from '../config/db';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export const addNewUser = async (req: Request, res: Response) => {
    try{
        const newUser = req.body as Users;
        await prisma.users.create({
            data: newUser,
        });
        return res.status(201).json({
            message: "New User Created "
        });
    }catch (error) {
        const prismaError = error as PrismaClientKnownRequestError;
        res.status(400).json({
          message: prismaError.message,
        });
      }
}

export const getUsers = async (req: Request, res: Response) => {
    const users = await prisma.users.findMany();
    return res.status(200).json(users);
};


