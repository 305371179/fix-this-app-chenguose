export interface INote {
    id: number;
    title: string;
    body: string;
    updated: number;
}

// 数组类型
export interface IState{
    noteList: INote[],
    activeIndex: number,
}

// redux
// action对象的类型
export interface IAction{
    type: ACTION_TYPE,
    [key: string]:any
}

// 枚举相当于常量,不可变的,方便于用来做判断
export enum ACTION_TYPE{
    CREATE_NOTE = 'createNote',
    SAVE_NOTE = 'saveNote',
    DELETE_NOTE = 'deleteNote',
    GET_ALL_NOTES = 'getAllNotes',
    SET_ACTIVE_INDEX = 'setActiveIndex',
}

