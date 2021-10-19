import * as yup from 'yup';


const YupNoteSchema = yup.object().shape({
    id: yup.string().required(),
    name: yup.string(),
    created: yup.date(),
    category: yup.string(),
    content: yup.string(),
    archive: yup.boolean(),
    dates: yup.array()
});

export default YupNoteSchema;