import {FC, ReactElement} from 'react';
import {INote} from "./typings";
import NoteItem from './NoteItem'

interface IProps {
    noteList: INote[],
    activeIndex: number,
    setActiveIndex: (index: number) => void,
    deleteNote: (id: number) => void,
}

const List: FC<IProps> = ({
                              noteList,
                              activeIndex,
                              setActiveIndex,
                              deleteNote,
                          }): ReactElement => {
    return (
        <div className="notes__list">
            {noteList.map((item: INote, index) => {
                return (
                    <NoteItem
                        key={index}
                        note={item}
                        isActive={activeIndex === index}
                        index={index}
                        setActiveIndex={setActiveIndex}
                        deleteNote={deleteNote}
                    />

                )
            })}
        </div>
    );
}

export default List
