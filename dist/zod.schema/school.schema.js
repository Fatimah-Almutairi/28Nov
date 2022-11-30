"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherSchema = exports.classroomSchema = exports.studentSchema = void 0;
const zod_1 = require("zod");
exports.studentSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" }),
        age: zod_1.z
            .number({ required_error: "Age is required" })
            .min(18).max(40),
        major: zod_1.z.string({ required_error: "Major is required" })
    }),
    params: zod_1.z.object({
        id: zod_1.z.string({ required_error: "Please send your ID in the params" })
    })
});
exports.classroomSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" })
    }),
    params: zod_1.z.object({
        id: zod_1.z.string({ required_error: "Please send ID in the params" })
    })
});
exports.teacherSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" })
    }),
    params: zod_1.z.object({
        id: zod_1.z.string({ required_error: "Please send your ID in the params" })
    })
});
