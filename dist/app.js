"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./routes/user.route"));
require("dotenv/config");
const db_1 = require("./config/db");
const school_route_1 = __importDefault(require("./routes/school.route"));
const app = (0, express_1.default)();
//config
(0, db_1.connectDB)();
//midlleware
app.use(express_1.default.json());
app.use('/api/v1/user', user_route_1.default);
app.use('/api/v1/school', school_route_1.default);
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
