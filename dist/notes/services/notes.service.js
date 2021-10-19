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
const notes_dao_1 = __importDefault(require("../daos/notes.dao"));
class NotesService {
    constructor() {
        this.stats = () => __awaiter(this, void 0, void 0, function* () {
            console.log('Workd');
            const notes = yield this.list(0, 0);
            const archiveNotes = [], unArchiveNotes = [];
            for (let note of notes) {
                if (note.archive) {
                    archiveNotes.push(note);
                }
                else {
                    unArchiveNotes.push(note);
                }
            }
            const sortNotes = {
                archive: archiveNotes,
                unarchive: unArchiveNotes
            };
            return sortNotes;
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return notes_dao_1.default.addNote(resource);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return notes_dao_1.default.removeNoteById(id);
        });
    }
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return notes_dao_1.default.getNotes();
        });
    }
    patchById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return notes_dao_1.default.patchNoteById(id, resource);
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return notes_dao_1.default.getNoteById(id);
        });
    }
    setArchive(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // return NotesDao.changeNotesByArchive(id);
        });
    }
}
exports.default = new NotesService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vdGVzL3NlcnZpY2VzL25vdGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrRUFBeUM7QUFNekMsTUFBTSxZQUFZO0lBQWxCO1FBMEJJLFVBQUssR0FBRyxHQUFTLEVBQUU7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEMsTUFBTSxZQUFZLEdBQUcsRUFBRSxFQUFFLGNBQWMsR0FBRyxFQUFFLENBQUM7WUFDN0MsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUU7Z0JBRXBCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDZCxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUMzQjtxQkFBTTtvQkFDSCxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3QjthQUdKO1lBQ0QsTUFBTSxTQUFTLEdBQUc7Z0JBQ2QsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLFNBQVMsRUFBRSxjQUFjO2FBQzVCLENBQUE7WUFFRCxPQUFPLFNBQVMsQ0FBQztRQUNyQixDQUFDLENBQUEsQ0FBQTtJQUNMLENBQUM7SUE5Q1MsTUFBTSxDQUFDLFFBQXVCOztZQUVoQyxPQUFPLG1CQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxFQUFVOztZQUN2QixPQUFPLG1CQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7S0FBQTtJQUVLLElBQUksQ0FBQyxLQUFhLEVBQUUsSUFBWTs7WUFDbEMsT0FBTyxtQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9CLENBQUM7S0FBQTtJQUVLLFNBQVMsQ0FBQyxFQUFVLEVBQUUsUUFBc0I7O1lBQzlDLE9BQU8sbUJBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxFQUFVOztZQUNyQixPQUFPLG1CQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxFQUFVOztZQUN2Qiw0Q0FBNEM7UUFDaEQsQ0FBQztLQUFBO0NBdUJKO0FBRUQsa0JBQWUsSUFBSSxZQUFZLEVBQUUsQ0FBQyJ9