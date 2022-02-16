import {FC, ReactElement, useEffect, useState} from 'react';
import {INote} from "./typings";

interface IProps{
    note: INote,
    saveNote: (note:INote)=>void
}

const Preview : FC<IProps> = ({
    note,
    saveNote
}):ReactElement => {
    const [title,setTitle] = useState(note.title)
    const [body,setBody] = useState(note.body)
    useEffect(()=>{
        setTitle(note.title)
        setBody(note.body)
    },[note])
    return (
        <div className="notes__preview">
            <button className="notes__save"
                onClick={()=> {
                    saveNote({
                        ...note,
                        title,
                        body,
                        updated: Date.now()
                    })
                }}
            >保存</button>
            <input className="notes__title"
                   value={title}
                   onChange={e=> {
                       setTitle(e.target.value)
                   }}
                   type="text"
                   placeholder="新笔记..."
            />
            <textarea
                className="notes__body"
                value={body}
                placeholder="编辑笔记..."
                onChange={e=> {
                    setBody(e.target.value)
                }}
            ></textarea>
        </div>
    );
}

export default Preview
