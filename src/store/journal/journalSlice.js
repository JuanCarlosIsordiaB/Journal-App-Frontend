
import { createSlice } from '@reduxjs/toolkit';
export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
       isSaving: true,
       messageSaved: '',
       notes: [],
       active: {
           id: 'ABC23',
           title: '',
           body: '',
           date: 123,
           imageUrls: [], 
       }
   },
    reducers: {
      addNewEmptyNote: (state, action) => {

      },
      setActiveNote: (state, action) => {

      },
      setNotes: (state, action ) => {

      },
      setSaving: (satet) => {

      },
      updateNote: (state, action) => {

      },
      deleteNoteById: ( state, action) => {


      }
    
    }
});


export const { 
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById
} = journalSlice.actions;