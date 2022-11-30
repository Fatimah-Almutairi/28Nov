import { z} from 'zod';

export const studentSchema = z.object ({
    body: z.object({
        name: z.string ({required_error: "Name is required"}),
        age: z
        .number({required_error: "Age is required"})
        .min(18).max(40),
        major: z.string({required_error: "Major is required"})
    }),
    params: z.object({
        id: z.string({required_error: "Please send your ID in the params"})
    })
});

export const classroomSchema = z.object({
    body: z.object({
        name: z.string ({required_error: "Name is required"})
    }),
    params: z.object({
        id: z.string({required_error: "Please send ID in the params"})
    })
});

export const teacherSchema = z.object({
    body: z.object({
        name: z.string ({required_error: "Name is required"})
    }),
    params: z.object({
        id: z.string({required_error: "Please send your ID in the params"})
    })
});

export type studentSchemaType = z.infer<typeof studentSchema>['params']

export type classroomSchemaType = z.infer<typeof classroomSchema>['params']

export type teacherSchemaType = z.infer<typeof teacherSchema>['params']

