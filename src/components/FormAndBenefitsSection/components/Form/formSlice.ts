import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type formInputName =
 | "firstName"
 | "lastName"
 | "email"
 | "phoneNumber"
 | "typeOfAppointment";

export interface DefaultFormState {
 data: {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  typeOfAppointment: string;
 };
}

const initialState = {
 data: {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  typeOfAppointment: "",
 },
};

interface formChangePayload {
 name: string;
 value: string;
}

export const formSlice = createSlice({
 name: "form",
 initialState,
 reducers: {
  formChange: (state, action: PayloadAction<formChangePayload>) => {
   const fieldName = action.payload.name as formInputName;

   state.data[fieldName] = action.payload.value;
  },
  clearForm: (state) => {
   state.data = initialState.data;
  },
 },
});

export const { formChange, clearForm } = formSlice.actions;
export default formSlice.reducer;
