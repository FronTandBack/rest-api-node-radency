
import mongooseService from '../../common/services/mongoose.service'; \

import { CreateNoteDto } from '../dto/create.note.dto';
import { PatchNoteDto } from '../dto/patch.note.dto';
import NoteSchema from '../scheme/note.scheme';
import shortid from 'shortid';
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');


class NotesDao {
    // notes: Array<CreateNoteDto> = data;

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

    Note = mongooseService.getMongoose().model('Notes', this.noteSchema);

    constructor() {
        log('Created new instance of NotesDao');
    }

    async addNote(noteFields: CreateNoteDto) {

        const noteId = shortid.generate();
        // note.category = "Idea";
        // note.created = new Date();
        // note.archive = true;
        // note.dates = [new Date()];

        const note = new this.Note({
            _id: noteId,
            ...noteFields,
            permissionFlags: 1,
        });



        const noteValid = await NoteSchema.isValid(note);

        console.log(noteValid);
        if (!noteValid) {
            console.error('Not valid data send!');
            //  throw new Error("Hello Error is in Valid Data"); 
        }

        // this.notes.push(note);
        await note.save();

        return note;
    }

    async getNotes() {
        // console.log('Now is empty array');
        // return this.notes;

        return this.Note.find()
            // .limit(limit)
            // .skip(limit * page)
            .exec();
    }

    async getNoteById(noteId: string) {

        return this.Note.findOne({ _id: noteId }).populate('Note').exec();
        // return this.notes.find((note: { id: string }) => note.id === id);
    }

    async patchNoteById(noteId: string, noteFields: PatchNoteDto) {

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

        const exisitingNote = await this.Note.findOneAndUpdate(
            { _id: noteId },
            { $set: noteFields },
            { new: true }
        ).exec();


        return exisitingNote;

    }

    async removeNoteById(noteId: string) {
        // const objIndex = this.notes.findIndex(
        //     (obj: { id: string }) => obj.id === id
        // );
        // this.notes.splice(objIndex, 1);
        // return `${id} removed`;

        return this.Note.deleteOne({ _id: noteId }).exec();
    }

    // async changeNotesByArchive(id: string) {
    //     const objIndex = this.notes.findIndex(
    //         (obj: { id: string }) => obj.id === id
    //     );


    //     let currentNote = this.notes[objIndex];

    //     // currentNote.archive = currentNote.archive ? false : true; 
    //     if (currentNote.archive) {
    //         currentNote.archive = false;
    //     } else {
    //         currentNote.archive = true;
    //     }

    //     this.notes.splice(objIndex, 1, currentNote);

    //     return `${id} Note archive was changed!`;
    // }

}

export default new NotesDao();