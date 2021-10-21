import express from 'express';
import notesService from '../services/notes.service';
import YupNoteSchema from '../scheme/note.scheme';

import debug from 'debug';

const log: debug.IDebugger = debug('app:notes-controller');
class NotesMiddleware {

    async validateRequiredNoteBodyFields(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {

        const noteValid = await YupNoteSchema.isValid(req.body);

        console.log('Work midlle');
        console.log(noteValid);
        if (!noteValid) {
            res.status(400).send({
                error: `Missing required fields`,
            });
        }

        return next(); 

    }

    // async validateRequiredCreateNoteBodyFields(
    //     req: express.Request,
    //     res: express.Response,
    //     next: express.NextFunction) {


       
    // }



    // async extractNoteId(
    //     req: express.Request,
    //     res: express.Response,
    //     next: express.NextFunction
    // ) {
    //     console.log('Body id');
    //     req.body.id = req.params.id;
    //     next();
    // }
}

export default new NotesMiddleware();