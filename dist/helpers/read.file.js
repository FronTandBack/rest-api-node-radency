"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = void 0;
const fs_1 = __importDefault(require("fs"));
function readFile(path) {
    fs_1.default.readFile(path, 'utf8', (err, fileContents) => {
        if (err) {
            console.error(err);
            return;
        }
        try {
            // const data = JSON.parse(fileContents)
            return fileContents;
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.readFile = readFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC5maWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vaGVscGVycy9yZWFkLmZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNENBQW9CO0FBR3BCLFNBQWdCLFFBQVEsQ0FBQyxJQUFZO0lBQ2pDLFlBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsRUFBRTtRQUM1QyxJQUFJLEdBQUcsRUFBRTtZQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsT0FBTTtTQUNQO1FBQ0QsSUFBSTtZQUNGLHdDQUF3QztZQUN4QyxPQUFPLFlBQVksQ0FBQztTQUNyQjtRQUFDLE9BQU0sR0FBRyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNuQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQWJELDRCQWFDIn0=