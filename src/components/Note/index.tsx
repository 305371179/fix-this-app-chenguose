import {FC, ReactElement, useCallback, useEffect, useReducer} from 'react';
import {INote, IState} from './typings'
import NoteList from './NoteList'
import Preview from './Preview'
import {
    getAllNotesAction,
    createNoteAction,
    saveNoteAction,
    deleteNoteAction,
    setActiveIndexAction
} from '../../store/actions'
import {noteReducer} from "../../store/reducers";


function init(initNoteList: INote[]): IState {
    return {
        noteList: initNoteList,
        activeIndex: -1,
    }
}

const Note: FC = (): ReactElement => {
    const [state, dispatch] = useReducer(noteReducer, [], init)

    // 处理localstorage的数据读取和设置，组件挂载时读取，noteList状态变更时设置
    const DATA_KEY = 'notesapp-notes'
    useEffect(() => {
        const list = localStorage.getItem(DATA_KEY || '[]');
        const noteList = JSON.parse(list!);
        dispatch(getAllNotesAction(noteList))
    }, [])
    useEffect(() => {
        localStorage.setItem(DATA_KEY, JSON.stringify(state.noteList))
    }, [state.noteList])

    const createNote = useCallback(() => {
        const note: INote = {
            id: Date.now(),
            title: '新建笔记',
            body: '开始记录...',
            updated: Date.now()
        }
        dispatch(createNoteAction(note));
    }, [])

    const saveNote = useCallback((note: INote) => {
        dispatch(saveNoteAction(note))
    }, [])

    const deleteNote = useCallback((id: number) => {
        dispatch(deleteNoteAction(id))
    }, [])
    /*
    * NoteItem点击后会调用该函数，更新state的activeIndex值，
    * activeIndex的值为noteList的下标或者-1，列表项的选中和Preview组件显示的内容都与此有关
    * */
    const setActiveIndex = useCallback((index: number) => {
        dispatch(setActiveIndexAction(index))
    }, [])

    return (
        <>
            <div className="notes__sidebar">
                <button className="notes__add" type="button" onClick={createNote}>添加新的笔记 📒
                </button>
                {state.noteList.length > 0 ? <NoteList
                    {...state}
                    setActiveIndex={setActiveIndex}
                    deleteNote={deleteNote}
                /> : <span>笔记空空如也</span>}

            </div>
            {state.activeIndex !== -1 ?
                <Preview note={state.noteList[state.activeIndex]} saveNote={saveNote}/> :
                <div className="notes__tip-unselected">请选中或者创建笔记进行编辑</div>}
        </>
    );
}

export default Note
