"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const express_1 = require("express");
const createCourseService_1 = __importDefault(require("./createCourseService"));
function createCourse(req, res) {
    createCourseService_1.default.execute({
        name: 'NodeJS',
        duration: 10,
        educator: "Dani"
    });
    createCourseService_1.default.execute({
        name: 'React',
        educator: "Diego"
    });
    return express_1.response.send;
}
exports.createCourse = createCourse;
