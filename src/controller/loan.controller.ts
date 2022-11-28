import { Request, Response } from "express";
import { Loan } from '@prisma/client';
import { prisma } from '../config/db';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

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


