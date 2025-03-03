import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        next(error);
    }
};

// export const createUser = async (req: Request, res: Response) => {
//     const { email, name } = req.body;

//     if (!email) {
//         return res.status(400).json({ error: 'Email is required' });
//     }

//     try {
//         const newUser = await prisma.user.create({
//             data: { email, name },
//         });
//         res.status(201).json(newUser);
//     } catch (error) {
//         // next(error);
//     }
// };
