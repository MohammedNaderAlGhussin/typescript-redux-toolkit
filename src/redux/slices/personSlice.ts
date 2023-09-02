import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type Person = {
  id: number;
  name: string;
};

type PersonLsit = {
  persons: Person[];
};

const initialState: PersonLsit = {
  persons: [],
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson: (state: PersonLsit, action: PayloadAction<{ name: string }>) => {
      state.persons.push({
        id: state.persons.length,
        name: action.payload.name,
      });
    },
  },
});

export default personSlice.reducer;
export const { addPerson } = personSlice.actions;
