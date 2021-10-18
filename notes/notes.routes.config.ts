import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';
import NotesController from './controllers/notes.controller';
import NotesMiddleware from './middleware/notes.middleware';

export class NotesRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'NotesRoutes');
    }


    configureRoutes() {
        this.app
            .route(`/notes`)
            .get(NotesController.listNotes)
            .post(
                NotesMiddleware.validateRequiredNoteBodyFields,
                NotesController.createNote
            );

        this.app
            .route(`/notes/stats`)
            .get(NotesController.getNotesStats);



        this.app
            .route(`/notes/:id`)
            .get(NotesController.getNoteById)
            .delete(NotesController.removeNote);

        this.app.patch(`/notes/:id`, [
            NotesController.patch,
        ]);





        return this.app;
    }
}