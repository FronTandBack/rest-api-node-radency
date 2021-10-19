"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const note_scheme_1 = __importDefault(require("../scheme/note.scheme"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:notes-controller');
class NotesMiddleware {
    validateRequiredNoteBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const noteValid = yield note_scheme_1.default.isValid(req.body);
            // console.log(noteValid);
            if (!noteValid) {
                res.status(400).send({
                    error: `Missing required fields`,
                });
            }
            next();
        });
    }
}
exports.default = new NotesMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vdGVzL21pZGRsZXdhcmUvbm90ZXMubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBLHdFQUFrRDtBQUVsRCxrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDM0QsTUFBTSxlQUFlO0lBRVgsOEJBQThCLENBQ2hDLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUcxQixNQUFNLFNBQVMsR0FBRyxNQUFNLHFCQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV4RCwwQkFBMEI7WUFFMUIsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDWixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDakIsS0FBSyxFQUFFLHlCQUF5QjtpQkFDbkMsQ0FBQyxDQUFDO2FBQ047WUFFRCxJQUFJLEVBQUUsQ0FBQztRQUVYLENBQUM7S0FBQTtDQXNCSjtBQUVELGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUMifQ==