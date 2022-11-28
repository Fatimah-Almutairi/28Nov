import { Book } from '@prisma/client';
import { Request, Response } from "express";
import { prisma } from '../config/db';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export const addNewBook = async (req: Request, res: Response) => {
    try{
        const newBook = req.body as Book;
        await prisma.book.create({
            data: newBook,
            });
        return res.status(201).json({
            message: "New Book Created "
        });
    }catch (error) {
        const prismaError = error as PrismaClientKnownRequestError;
        res.status(400).json({
          message: prismaError.message,
        });
      }
}

export const getBooks = async (req: Request, res: Response) => {
const book= await prisma.book.findMany();
return res.status(200).json(book);
}
