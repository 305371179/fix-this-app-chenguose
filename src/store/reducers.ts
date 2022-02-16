import {ACTION_TYPE, IAction, INote, IState} from "../components/Note/typings";

function noteReducer(state: IState,action:IAction):IState{
    switch(action.type){
        case ACTION_TYPE.GET_ALL_NOTES:
            return {
                ...state,
                noteList: action.noteList.sort((a:INote, b:INote) => {
                    return a.updated > b.updated ? -1 : 1;
                }),
            }
        case ACTION_TYPE.CREATE_NOTE:
            return {
                ...state,
                noteList: [
                   action.note,
                    ...state.noteList,
                ],
                activeIndex: 0
            }
        case ACTION_TYPE.SAVE_NOTE:
            return {
                ...state,
                noteList: state.noteList.map(note=> {
                    if(note.id === action.note.id) {
                        return Object.assign({},note,action.note)
                    }
                    return note
                }).sort((a:INote, b:INote) => {
                    return a.updated > b.updated ? -1 : 1;
                }),
                activeIndex: -1
            }

        case ACTION_TYPE.SET_ACTIVE_INDEX:
            return {
                ...state,
                activeIndex: state.activeIndex !== action.activeIndex ? action.activeIndex : -1
            }
        case ACTION_TYPE.DELETE_NOTE:
            return {
                ...state,
                noteList: state.noteList.filter(note=>{
                    return note.id != action.id
                }),
                activeIndex: -1
            }
        default:
            return state;
    }
}

export {
    noteReducer
}
