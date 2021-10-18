import { CreateNoteDto } from '../dto/create.note.dto';

const data: Array<CreateNoteDto> = [
    {
        "name": "naruto",
        "content": "Drive a spaceship!",
        "category": "Idea",
        "created": new Date(),
        "archive": true,
        "dates": [
            new Date()
        ]
    },
    {
        "name": "Kaido",
        "content": "Drive a spaceship!",
        "category": "Idea",
        "created": new Date(),
        "archive": true,
        "dates": [
            new Date()
        ]
    },
    {
        "name": "Monako",
        "content": "Drive a spaceship!",
        "category": "Idea",
        "created": new Date(),
        "archive": false,
        "dates": [
            new Date()
        ]
    },
    {
        "name": "Laser",
        "content": "Drive a spaceship!",
        "category": "Idea",
        "created": new Date(),
        "archive": true,
        "dates": [
            new Date()
        ]
    }
];

export default data;