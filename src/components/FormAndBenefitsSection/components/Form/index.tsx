import { RootState } from "@/store";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetForm, formChange } from "./formSlice";
import type { formInputName } from "./formSlice";
import PortalModal from "@/components/PortalModal";
import { getPlaceholder } from "@/utils";
import SubmissionSuccessfulModal from "@/components/SubmissionSuccessfulModal";

const formInputKeys: formInputName[] = [
 "firstName",
 "lastName",
 "email",
 "phoneNumber",
 "typeOfAppointment",
];

const Form: React.FC = () => {
 const formData = useSelector((state: RootState) => state.form.data);
 const dispatch = useDispatch();
 const [showSuccessfulSubmissionModal, setShowSuccessfulSubmissionModal] =
  useState(false);
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const { firstName, lastName, email, phoneNumber, typeOfAppointment } =
   formData;
  if (!(firstName && lastName && email && phoneNumber && typeOfAppointment))
   return;

  dispatch(resetForm());
  setShowSuccessfulSubmissionModal(true);
 };

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
 ) => {
  const { name, value } = e.target;
  dispatch(formChange({ name, value }));
 };

 return (
  <div className="w-full max-w-[400px] h-[678px] flex flex-col relative">
   <div className="h-full w-full bg-formBg absolute left-0 lg:top-[-20%]">
    <h2 className="text-3xl text-formText p-5 w-[290px] mx-auto text-center">
     Schedule An Appointment
    </h2>
    <p className="text-l text-formText w-[290px] mx-auto text-center">
     Here, let visitors know what will happen when they complete your form.
    </p>
    <form
     className="w-full flex mt-8 flex-col items-center gap-8"
     onSubmit={handleSubmit}
    >
     {formInputKeys.map((inputName, idx) =>
      inputName === "typeOfAppointment" ? (
       <select
        key={inputName}
        value={formData?.[inputName] as string}
        name={inputName}
        onChange={handleChange}
        className="rounded-md w-72 bg-white h-11 px-5"
       >
        <option className="w-full" value="Type Of Appointment">
         Type Of Appointment
        </option>
        <option className="w-full" value="Type 1">
         Type 1
        </option>
        <option className="w-full" value="Type 2">
         Type 2
        </option>
        <option className="w-full" value="Type 3">
         Type 3
        </option>
       </select>
      ) : (
       <input
        placeholder={getPlaceholder(inputName)}
        name={inputName}
        key={idx}
        required
        type={inputName === "email" ? "email" : "text"}
        value={formData?.[inputName] as string}
        onChange={handleChange}
        className="rounded-md w-72 bg-white h-11 px-5"
       />
      )
     )}
     <button type="submit" className="bg-submitBtn rounded-md w-72 h-11">
      Schedule Now
     </button>
    </form>
    {showSuccessfulSubmissionModal && (
     <PortalModal closeHandler={() => setShowSuccessfulSubmissionModal(false)}>
      <SubmissionSuccessfulModal />
     </PortalModal>
    )}
   </div>
  </div>
 );
};
export default Form;
