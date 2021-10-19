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
const mongoose_service_1 = __importDefault(require("../../common/services/mongoose.service"));
const note_scheme_1 = __importDefault(require("../scheme/note.scheme"));
const shortid_1 = __importDefault(require("shortid"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:in-memory-dao');
class NotesDao {
    constructor() {
        // notes: Array<CreateNoteDto> = data;
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.noteSchema = new this.Schema({
            _id: String,
            name: String,
            content: String,
            category: String,
            created: Date,
            archive: Boolean,
            dates: Array
        }, { id: false });
        this.Note = mongoose_service_1.default.getMongoose().model('notes', this.noteSchema);
        log('Created new instance of NotesDao');
    }
    addNote(noteFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const noteId = shortid_1.default.generate();
            // note.category = "Idea";
            // note.created = new Date();
            // note.archive = true;
            // note.dates = [new Date()];
            const note = new this.Note(Object.assign({ _id: noteId }, noteFields));
            const noteValid = yield note_scheme_1.default.isValid(note);
            console.log(noteValid);
            if (!noteValid) {
                console.error('Not valid data send!');
                //  throw new Error("Hello Error is in Valid Data"); 
            }
            // this.notes.push(note);
            yield note.save();
            return note;
        });
    }
    getNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log('Now is empty array');
            // return this.notes;
            console.log('Add note before mongo');
            return this.Note.find({})
                // .limit(10)
                // .skip(10)
                .exec();
            // return notes;
        });
    }
    getNoteById(noteId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Note.findOne({ _id: noteId }).populate('Note').exec();
            // return this.notes.find((note: { id: string }) => note.id === id);
        });
    }
    patchNoteById(noteId, noteFields) {
        return __awaiter(this, void 0, void 0, function* () {
            // const objIndex = this.notes.findIndex(
            //     (obj: { id: string }) => obj.id === id
            // );
            // let currentNote = this.notes[objIndex];
            // const allowedPatchFields = [
            //     'name',
            //     'category',
            //     'content',
            //     'archive',
            //     'dates'
            // ];
            // for (let field of allowedPatchFields) {
            //     if (field in note) {
            //         // @ts-ignore
            //         currentNote[field] = note[field];
            //     }
            // }
            // this.notes.splice(objIndex, 1, currentNote);
            // return `${note.id} patched`;
            const exisitingNote = yield this.Note.findOneAndUpdate({ _id: noteId }, { $set: noteFields }, { new: true }).exec();
            return exisitingNote;
        });
    }
    removeNoteById(noteId) {
        return __awaiter(this, void 0, void 0, function* () {
            // const objIndex = this.notes.findIndex(
            //     (obj: { id: string }) => obj.id === id
            // );
            // this.notes.splice(objIndex, 1);
            // return `${id} removed`;
            return this.Note.deleteOne({ _id: noteId }).exec();
        });
    }
}
exports.default = new NotesDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm90ZXMvZGFvcy9ub3Rlcy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4RkFBcUU7QUFJckUsd0VBQStDO0FBQy9DLHNEQUE4QjtBQUM5QixrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG1CQUFtQixDQUFDLENBQUM7QUFHeEQsTUFBTSxRQUFRO0lBaUJWO1FBaEJBLHNDQUFzQztRQUV0QyxXQUFNLEdBQUcsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFFOUMsZUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN6QixHQUFHLEVBQUUsTUFBTTtZQUNYLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLE1BQU07WUFDZixRQUFRLEVBQUUsTUFBTTtZQUNoQixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1NBQ2YsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRWxCLFNBQUksR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBR2pFLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFSyxPQUFPLENBQUMsVUFBeUI7O1lBRW5DLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEMsMEJBQTBCO1lBQzFCLDZCQUE2QjtZQUM3Qix1QkFBdUI7WUFDdkIsNkJBQTZCO1lBQzdCLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksaUJBQ3RCLEdBQUcsRUFBRSxNQUFNLElBQ1IsVUFBVSxFQUVmLENBQUM7WUFJSCxNQUFNLFNBQVMsR0FBRyxNQUFNLHFCQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWpELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ3RDLHFEQUFxRDthQUN4RDtZQUVELHlCQUF5QjtZQUN6QixNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO0tBQUE7SUFFSyxRQUFROztZQUNWLHFDQUFxQztZQUNyQyxxQkFBcUI7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNyQixhQUFhO2dCQUNiLFlBQVk7aUJBQ1gsSUFBSSxFQUFFLENBQUM7WUFFWixnQkFBZ0I7UUFDcEIsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLE1BQWM7O1lBRTVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEUsb0VBQW9FO1FBQ3hFLENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxNQUFjLEVBQUUsVUFBd0I7O1lBRXhELHlDQUF5QztZQUN6Qyw2Q0FBNkM7WUFDN0MsS0FBSztZQUNMLDBDQUEwQztZQUMxQywrQkFBK0I7WUFDL0IsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCxLQUFLO1lBQ0wsMENBQTBDO1lBQzFDLDJCQUEyQjtZQUMzQix3QkFBd0I7WUFDeEIsNENBQTRDO1lBQzVDLFFBQVE7WUFDUixJQUFJO1lBQ0osK0NBQStDO1lBQy9DLCtCQUErQjtZQUUvQixNQUFNLGFBQWEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQ2xELEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUNmLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUNwQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FDaEIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUdULE9BQU8sYUFBYSxDQUFDO1FBRXpCLENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxNQUFjOztZQUMvQix5Q0FBeUM7WUFDekMsNkNBQTZDO1lBQzdDLEtBQUs7WUFDTCxrQ0FBa0M7WUFDbEMsMEJBQTBCO1lBRTFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2RCxDQUFDO0tBQUE7Q0FzQko7QUFFRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDIn0=