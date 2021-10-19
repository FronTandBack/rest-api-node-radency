
import mongooseService from '../../common/services/mongoose.service';

import { CreateNoteDto } from '../dto/create.note.dto';
import { PatchNoteDto } from '../dto/patch.note.dto';
import shortid from 'shortid';
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');


class NotesDao {

    Schema = mongooseService.getMongoose().Schema;
    noteSchema = new this.Schema({
        _id: String,
        name: String,
        content: String,
        category: String,
        created: Date,
        archive: Boolean,
        dates: Array
    }, { id: false });

    Note = mongooseService.getMongoose().model('notes', this.noteSchema);

    constructor() {
        log('Created new instance of NotesDao');
    }

    async addNote(noteFields: CreateNoteDto) {

        const noteId = shortid.generate();
      
        noteFields['created'] = new Date(noteFields['created']);


        console.log(noteFields);
        

        const note = new this.Note({
            _id: noteId,
            ...noteFields,
            permissionFlags: 1,
        });




        await note.save();

        return note;
    }

    async getNotes() {
        console.log('Add note before mongo');
        return this.Note.find({})
            // .limit(10)
            // .skip(10)
            .exec();
    }

    async getNoteById(noteId: string) {

        return this.Note.findOne({ _id: noteId }).exec();
    }

    async patchNoteById(noteId: string, noteFields: PatchNoteDto) {


        const exisitingNote = await this.Note.findOneAndUpdate(
            { _id: noteId },
            { $set: noteFields },
            { new: true }
        ).exec();


        return exisitingNote;

    }

    async removeNoteById(noteId: string) {

        return this.Note.deleteOne({ _id: noteId }).exec();
    }

  

}

export default new NotesDao();