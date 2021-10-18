import express from 'express';
import notesService from '../services/notes.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:notes-controller');
class NotesMiddleware {

    async validateRequiredNoteBodyFields(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        if (req.body && req.body.name && req.body.content) {
            next();
        } else {
            res.status(400).send({
                error: `Missing required fields name and content`,
            });
        }

    }

    

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