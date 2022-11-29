import { Request, Response } from "express";
import {  Loan } from '@prisma/client';
import { prisma } from '../config/db';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { paramstype } from "../zod.schema/schemas";

export const addNewLoan = async (req: Request, res: Response) => {
    try{
        const newLoan = req.body as Loan;
        await prisma.loan.create({
            data: newLoan,
        });
        return res.status(201).json({
            message: "New Loan Created "
        });
    }catch (error) {
        const prismaError = error as PrismaClientKnownRequestError;
        res.status(400).json({
          message: prismaError.message,
        });
      }
}

export const getLoans = async (req: Request, res: Response) => {
    const loans = await prisma.loan.findMany();
    return res.status(200).json(loans);
};


export const loanBook = async (req: Request, res: Response) => {
    try {
        const  {user_id} = req.params as paramstype
        const getUser = await prisma.users.findUnique({
            where : {id : user_id},
            select: {
                username: true,
                loan: true,
            }
        })
        return res.status(200).json(getUser)
    }catch(error){
        const prismaError = error as PrismaClientKnownRequestError;
        res.status(400).json({
          message: prismaError.message,
        });
    }
}

export const lended = async (req:Request, res: Response) => {
    const {book_id} = req.body as Loan
    const isValid = await prisma.loan
}