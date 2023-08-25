import { createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://64e347acbac46e480e788506.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', (_, thunkAPI) => {
  return fetch(`${baseUrl}/contacts`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Request failed');
      }
      return response.json();
    })
    .then(data => data)
    .catch(error => {
      return thunkAPI.rejectWithValue(error.message);
    });
});

export const addContact = createAsyncThunk(
    "contacts/addContact",
    ({ name, number }, thunkAPI) => {
      return fetch(`${baseUrl}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone:number }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Request failed");
          }
          return response.json();
        })
        .then(data => data)
        .catch(error => {
          return thunkAPI.rejectWithValue(error.message);
        });
    }
  );

  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    (taskId, thunkAPI) => {
      return fetch(`${baseUrl}/contacts/${taskId}`, {
        method: "DELETE",
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Request failed");
          }
          return response.json();
        })
        .then(data => data)
        .catch(error => {
          return thunkAPI.rejectWithValue(error.message);
        });
    }
  );
  
  
  
  
  
  
  
  