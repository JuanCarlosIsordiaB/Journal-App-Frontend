
import { createSlice } from '@reduxjs/toolkit';
export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
       isSaving: false,
       messageSaved: '',
       notes: [],
       active: null/*{
           id: 'ABC23',
           title: '',
           body: '',
           date: 123,
           imageUrls: [], 
       }*/
   },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
            
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push( action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
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
    deleteNoteById,
    savingNewNote
} = journalSlice.actions;