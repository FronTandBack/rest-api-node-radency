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
const notes_storage_1 = __importDefault(require("../storage/notes.storage"));
const note_scheme_1 = __importDefault(require("../scheme/note.scheme"));
const shortid_1 = __importDefault(require("shortid"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:in-memory-dao');
class NotesDao {
    constructor() {
        this.notes = notes_storage_1.default;
        log('Created new instance of NotesDao');
    }
    addNote(note) {
        return __awaiter(this, void 0, void 0, function* () {
            note.id = shortid_1.default.generate();
            note.category = "Idea";
            note.created = new Date();
            note.archive = true;
            note.dates = [new Date()];
            console.log(note);
            const noteValid = yield note_scheme_1.default.isValid(note);
            console.log(noteValid);
            if (!noteValid) {
                console.error('Not valid data send!');
                //  throw new Error("Hello Error is in Valid Data"); 
            }
            this.notes.push(note);
            return note;
        });
    }
    getNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Now is empty array');
            return this.notes;
        });
    }
    getNoteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.notes.find((note) => note.id === id);
        });
    }
    patchNoteById(id, note) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.notes.findIndex((obj) => obj.id === id);
            let currentNote = this.notes[objIndex];
            const allowedPatchFields = [
                'name',
                'category',
                'content',
                'archive',
                'dates'
            ];
            for (let field of allowedPatchFields) {
                if (field in note) {
                    // @ts-ignore
                    currentNote[field] = note[field];
                }
            }
            this.notes.splice(objIndex, 1, currentNote);
            return `${note.id} patched`;
        });
    }
    removeNoteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.notes.findIndex((obj) => obj.id === id);
            this.notes.splice(objIndex, 1);
            return `${id} removed`;
        });
    }
    changeNotesByArchive(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.notes.findIndex((obj) => obj.id === id);
            let currentNote = this.notes[objIndex];
            // currentNote.archive = currentNote.archive ? false : true; 
            if (currentNote.archive) {
                currentNote.archive = false;
            }
            else {
                currentNote.archive = true;
            }
            this.notes.splice(objIndex, 1, currentNote);
            return `${id} Note archive was changed!`;
        });
    }
}
exports.default = new NotesDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm90ZXMvZGFvcy9ub3Rlcy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFJQSw2RUFBNEM7QUFDNUMsd0VBQStDO0FBRS9DLHNEQUE4QjtBQUM5QixrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG1CQUFtQixDQUFDLENBQUM7QUFHeEQsTUFBTSxRQUFRO0lBR1Y7UUFGQSxVQUFLLEdBQXlCLHVCQUFJLENBQUM7UUFHL0IsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVLLE9BQU8sQ0FBQyxJQUFtQjs7WUFFN0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxpQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBSzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsTUFBTSxTQUFTLEdBQUcsTUFBTSxxQkFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVqRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUN0QyxxREFBcUQ7YUFDeEQ7WUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV0QixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO0tBQUE7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