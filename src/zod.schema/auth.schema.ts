import { z} from 'zod';

export const registerSchema = z.object ({
    body: z.object({
        username: z.string({ required_error: 'Username is required'})
        .min(4),
        password: z.string({required_error: 'Password is required'})
        .min(6),
        email: z.string({required_error: 'Email is required'})
    }),
});

export const loginSchema = z.object ({
    body: z.object({
        username: z.string({ required_error: 'Username is required'}),
        password: z.string({required_error: 'Password is required'}),

    }),
});
