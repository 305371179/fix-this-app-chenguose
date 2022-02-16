import { ACTION_TYPE, INote} from "../components/Note/typings";

export const getAllNotesAction = (noteList: INote[]) => {
    return {
        type: ACTION_TYPE.GET_ALL_NOTES,
        noteList
    }
}

export const createNoteAction = (note: INote) => {
    return {
        type: ACTION_TYPE.CREATE_NOTE,
        note
    }
}

export const saveNoteAction = (note: INote) => {
    return {
        type: ACTION_TYPE.SAVE_NOTE,
        note
    }
}

export const deleteNoteAction = (id: number) => {
    return {
        type: ACTION_TYPE.DELETE_NOTE,
        id
    }
}

export const setActiveIndexAction = (activeIndex: number) => {
    return {
        type: ACTION_TYPE.SET_ACTIVE_INDEX,
        activeIndex
    }
}

