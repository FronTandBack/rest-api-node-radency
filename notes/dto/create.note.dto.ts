export interface CreateNoteDto {
    name: string;
    created: Date;
    category: string;
    content: string;
    archive: boolean;
    dates: Array<Date>

}