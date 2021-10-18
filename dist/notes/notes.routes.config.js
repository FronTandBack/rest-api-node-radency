"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const notes_controller_1 = __importDefault(require("./controllers/notes.controller"));
const notes_middleware_1 = __importDefault(require("./middleware/notes.middleware"));
class NotesRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'NotesRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/notes`)
            .get(notes_controller_1.default.listNotes)
            .post(notes_middleware_1.default.validateRequiredNoteBodyFields, notes_controller_1.default.createNote);
        this.app
            .route(`/notes/stats`)
            .get(notes_controller_1.default.getNotesStats);
        this.app
            .route(`/notes/:id`)
            .get(notes_controller_1.default.getNoteById)
            .delete(notes_controller_1.default.removeNote);
        this.app.patch(`/notes/:id`, [
            notes_controller_1.default.patch,
        ]);
        return this.app;
    }
}
exports.NotesRoutes = NotesRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL25vdGVzL25vdGVzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQW9FO0FBRXBFLHNGQUE2RDtBQUM3RCxxRkFBNEQ7QUFFNUQsTUFBYSxXQUFZLFNBQVEseUNBQWtCO0lBQy9DLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBR0QsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHO2FBQ0gsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNmLEdBQUcsQ0FBQywwQkFBZSxDQUFDLFNBQVMsQ0FBQzthQUM5QixJQUFJLENBQ0QsMEJBQWUsQ0FBQyw4QkFBOEIsRUFDOUMsMEJBQWUsQ0FBQyxVQUFVLENBQzdCLENBQUM7UUFFTixJQUFJLENBQUMsR0FBRzthQUNILEtBQUssQ0FBQyxjQUFjLENBQUM7YUFDckIsR0FBRyxDQUFDLDBCQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7UUFJeEMsSUFBSSxDQUFDLEdBQUc7YUFDSCxLQUFLLENBQUMsWUFBWSxDQUFDO2FBQ25CLEdBQUcsQ0FBQywwQkFBZSxDQUFDLFdBQVcsQ0FBQzthQUNoQyxNQUFNLENBQUMsMEJBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7WUFDekIsMEJBQWUsQ0FBQyxLQUFLO1NBQ3hCLENBQUMsQ0FBQztRQU1ILE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUFwQ0Qsa0NBb0NDIn0=