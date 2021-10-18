import express from 'express';
import notesService from '../services/notes.service';

import debug from 'debug';


const log: debug.IDebugger = debug('app:notes-controller');


class NotesController {
    async listNotes(req: express.Request, res: express.Response) {

        const notes = await notesService.list(100, 0);


        res.status(200).send(notes);
    }

    async getNotesStats(req: express.Request, res: express.Response) {
        const sortNotes = await notesService.stats(); 
      
        res.status(200).send(sortNotes);

    }

    async getNoteById(req: express.Request, res: express.Response) {
        const note = await notesService.readById(req.params.id);
        res.status(200).send(note);
    }

    async createNote(req: express.Request, res: express.Response) {

        const noteId = await notesService.create(req.body);

        res.status(201).send({ note: noteId });
    }

    async patch(req: express.Request, res: express.Response) {
      
        await notesService.patchById(req.params.id, req.body);

        res.status(204).send();
    }

   
    async removeNote(req: express.Request, res: express.Response) {

        await notesService.deleteById(req.params.id);

        res.status(204).send();
    }
}

export default new NotesController();