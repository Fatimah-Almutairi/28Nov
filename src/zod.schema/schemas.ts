import {z} from 'zod';

export const addUserSchema = z.object ({
    body: z.object({
        username: z.string({ required_error: 'Username is required'}),
        password: z.string({required_error: 'Password is required'}),

    }),
});

export const addBookSchema = z.object ({
    body: z.object({
        name: z.string({ required_error: 'Name is required'}),
        genre: z.string({required_error: 'Genre is required'}),

    }),
});

export const addLoanSchema = z.object({
    body: z.object ({
        user_id: z.string(),
        book_id: z.string()
    }),
});