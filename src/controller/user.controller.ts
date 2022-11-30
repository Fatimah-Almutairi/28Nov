import { Request, Response } from "express";
import { Users } from '@prisma/client';
import { prisma } from '../config/db';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import * as argon2 from "argon2";
import * as jwt from 'jsonwebtoken'

export const registerHandler = async (req: Request, res: Response) => {
    try{
        const newUser = req.body as Users;
        const hashPassword = await argon2.hash (newUser.password);
        newUser.password = hashPassword;
        await prisma.users.create ({
            data: newUser,
        });
        return res.status(201).json({
            message: "Welcome to the website "
        });
    }catch (error) {
        const prismaError = error as PrismaClientKnownRequestError;
        res.status(400).json({
          message: prismaError.message,
        });
      }
}

export const loginHandler = async (req: Request, res: Response) => {
    const {username, password} = req.body as Users;
    const user = await prisma.users.findUnique({
        where: {username}
    });
    if (!user) {
        return res.status(400). json({
            message: "Wrong Username or Password"
        });
    }

    const isValidPassword = await argon2.verify(user.password, password);

    if(!isValidPassword){
        return res.status(400).json({
            message : "Wrong Username or Password"
        });
    }
    const token = jwt.sign(
        {id: user.id, role: user.role},
        process.env.JWT_SECRET as string
    );
    console.log(token)

    return res.status(200).json({
        message: "Welcome Back..",
        token,
    });
};

export const getAllUser = async (req: Request, res: Response) => {
    try{
        const user= await prisma.users.findMany();
        return res.status(200).json(user);
    }catch(error){
        console.log(error);
        const prismaError = error as PrismaClientKnownRequestError;
        res.status(400).json({
          message: prismaError.message,
        }); 
    }
}

export  const user = async ( req: Request, res: Response) => {
    return res.status(200).json({message: "Welcome USER .."})
}

export  const admin = async ( req: Request, res: Response) => {
    return res.status(200).json({message: "Welcome ADMIN .."})
}
