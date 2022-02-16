import {FC, ReactElement} from 'react';
import {INote} from "./typings";

interface IProps {
    note: INote,
    isActive: boolean,
    index: number,
    setActiveIndex: (index: number) => void,
    deleteNote: (id: number) => void,
}

const NoteItem: FC<IProps> = ({
                              note,
                              isActive,
                              index,
                              setActiveIndex,
                              deleteNote,
                          }): ReactElement => {
    const MAX_BODY_LENGTH = 60;
    return (
    <div className={`notes__list-item ${isActive? "notes__list-item--selected":""}`}
         data-note-id={note.id}
         onClick={() => {
             setActiveIndex(index);
         }}
    >
        <div className="notes__small-title">{note.title}</div>
        <div className="notes__small-body">
            {note.body.substring(0, MAX_BODY_LENGTH)}
            {note.body.length > MAX_BODY_LENGTH ? "..." : ""}
        </div>
        <div className="notes__small-updated">
            {new Date(note.updated).toLocaleString(undefined, {
                dateStyle: "full",
                timeStyle: "short",
            })}
        </div>
        <button className="notes__delete"
        onClick={e=>{
            e.stopPropagation()
            deleteNote(note.id)
        }}
        >X</button>
    </div>
    );
}

export default NoteItem
