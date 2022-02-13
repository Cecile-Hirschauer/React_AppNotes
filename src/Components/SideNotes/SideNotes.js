import React, {useState, useEffect} from 'react';
import './SideNotes.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Note from './Note/Note';

export default function SidesNotes() {

  const {notes} = useSelector(state => state.notesReducer);
  // console.log(notes);

  const [notesList, setNotesList] = useState();

  useEffect(() => {
    setNotesList(notes);
  }, [notes]);

  const preventForm = e => e.preventDefault();
  
  return (
    <div className='notes-display'>
      <h2>mes notes</h2>
      <form onSubmit={preventForm}>
        <input 
        type="text" 
        id="serch-notes" 
        placeholder='Rechercher'/>
      </form>
      <ul className="notes-list">
        {notesList.map((item) =>(
          <Note
          key={item.id}
          id={item.id}
          title={item.title}
          subtitle={item.subtitle}
          body={item.body}
          />
        ))}
      </ul>
    </div>
  )
}
