
import NotesDao from '../daos/notes.dao';
import { CRUD } from '../../common/interfaces/crud.interface';
import { CreateNoteDto } from '../dto/create.note.dto';
import { PatchNoteDto } from '../dto/patch.Note.dto';


class NotesService implements CRUD {
    async create(resource: CreateNoteDto) {

        return NotesDao.addNote(resource);
    }

    async deleteById(id: string) {
        return NotesDao.removeNoteById(id);
    }

    async list(limit: number, page: number) {
        return NotesDao.getNotes();
    }

    async patchById(id: string, resource: PatchNoteDto) {
        return NotesDao.patchNoteById(id, resource);
    }

    async readById(id: string) {
        return NotesDao.getNoteById(id);
    }

    async setArchive(id: string) {
        return NotesDao.changeNotesByArchive(id);
    }

    stats = async () => {
        console.log('Workd');
        const notes = await this.list(0, 0); 
        const archiveNotes = [], unArchiveNotes = [];
        for (let note of notes) {
            
            if (note.archive) {
                archiveNotes.push(note);
            } else {
                unArchiveNotes.push(note);
            }


        }
        const sortNotes = {
            archive: archiveNotes, 
            unarchive: unArchiveNotes
        }

        return sortNotes;
    }
}

export default new NotesService();