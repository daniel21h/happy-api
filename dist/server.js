"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
require("./database/connection");
const routes_1 = __importDefault(require("./routes"));
const handler_1 = __importDefault(require("./config/errors/handler"));
const server = express_1.default();
server.use(cors_1.default());
server.use(express_1.default.json());
server.use(routes_1.default);
server.use("/uploads", express_1.default.static(path_1.default.join(__dirname, "..", "uploads")));
server.use(handler_1.default);
server.listen(3333, () => {
    console.log("🙃 Server running on port 3333.");
});
