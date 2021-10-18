export interface PatchNoteDto {
    name: string;
    created: Date;
    category: string;
    content: string;
    archive: boolean;
    dates: Array<Date>
}