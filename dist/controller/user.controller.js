"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginHandler = exports.registerHandler = void 0;
const db_1 = require("../config/db");
const argon2 = __importStar(require("argon2"));
const registerHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = req.body;
        const hashPassword = yield argon2.hash(newUser.password);
        newUser.password = hashPassword;
        yield db_1.prisma.users.create({
            data: newUser,
        });
        return res.status(201).json({
            message: "Welcome to the website "
        });
    }
    catch (error) {
        console.log(error);
        // const prismaError = error as PrismaClientKnownRequestError;
        // res.status(400).json({
        //   message: prismaError.message,
        // });
    }
});
exports.registerHandler = registerHandler;
const loginHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield db_1.prisma.users.findUnique({
        where: { username }
    });
    if (!user) {
        return res.status(400).json({
            message: "Wrong Username or Password"
        });
    }
    const isValidPassword = yield argon2.verify(user.password, password);
    if (!isValidPassword) {
        return res.status(400).json({
            message: "Wrong Username or Password"
        });
    }
    return res.status(200).json({
        message: "Welcome Back.."
    });
});
exports.loginHandler = loginHandler;
