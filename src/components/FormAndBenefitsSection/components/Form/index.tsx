import { RootState } from "@/store";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearForm, formChange } from "./formSlice";
import type { formInputName } from "./formSlice";
import PortalModal from "@/components/PortalModal";
import { getPlaceholder } from "@/utils";

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
  debugger;
  if (!(firstName && lastName && email && phoneNumber && typeOfAppointment))
   return;
  clearForm();

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
      <div className="top-[50%] left-[50%]">
       <div className="bg-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam incidunt
        sed doloremque similique hic, quos illum amet iste repellendus dolore
        corrupti deleniti odio qui totam illo repellat atque aliquid? Ad? Non
        maxime assumenda facilis soluta vero dolor, voluptatum explicabo quo
        inventore quam, dolore fugiat quasi quisquam dicta magni autem doloribus
        adipisci exercitationem totam at corrupti! Aliquam, et? Atque, corrupti
        omnis. Ipsum totam dolor rem quasi voluptas cupiditate repellendus
        dolorem atque? Alias quasi dolor necessitatibus eveniet, atque molestiae
        error architecto, sint eos repellat exercitationem, possimus iusto
        distinctio officiis sit voluptate quia. Velit, labore blanditiis.
        Placeat blanditiis officia fugit unde expedita deleniti incidunt
        suscipit reiciendis mollitia, adipisci cumque quae doloribus voluptatem
        necessitatibus perferendis ipsum deserunt sunt molestiae. Consequatur,
        ipsa tenetur? Corrupti, quos. Praesentium eos atque, nostrum ullam culpa
        natus rerum dignissimos nesciunt itaque iusto nulla architecto
        cupiditate officia quasi iste placeat, nobis delectus eum ut eaque
        suscipit neque aliquam. Minima, sit pariatur? Et qui dicta id corrupti
        quibusdam, officiis ea minima aperiam adipisci, ducimus reiciendis
        nostrum quam similique doloribus quos quae natus doloremque at
        repudiandae earum repellat. Adipisci pariatur illo est ad! Expedita
        deleniti vitae molestiae aperiam numquam, dolorem distinctio ex, quam
        accusamus dignissimos tenetur laborum exercitationem sint? Dolore magni
        cum quaerat est ea odio officiis vel veniam delectus. Vero, soluta
        dignissimos! Corrupti, quod aperiam. Aspernatur recusandae doloribus
        praesentium facilis? Vel amet aut excepturi suscipit eligendi nihil,
        atque non possimus quasi repellendus quos, voluptatum nisi laborum
        dolores eum natus esse veniam ex! Quos magni quas corporis nesciunt.
        Voluptatibus id quas unde a incidunt modi veritatis eos architecto sunt,
        non amet dolor facilis quia beatae commodi ea cum ullam nam ducimus
        eveniet necessitatibus. Reiciendis magni asperiores repellat sed saepe!
        Impedit harum explicabo suscipit officia accusamus iusto commodi maiores
        perferendis nam at! Hic explicabo qui, nihil consequatur consequuntur
        placeat itaque id possimus dicta quo. Distinctio ipsa eaque temporibus
        exercitationem laboriosam hic expedita quod, ab voluptatibus enim iusto
        maxime dolore obcaecati architecto quisquam fugiat accusantium, fuga
        soluta modi officiis, velit dolores nemo. Similique, voluptates numquam.
        Incidunt id est omnis voluptatum enim esse eius deleniti! Autem dolor
        aut ducimus voluptates magni, porro a alias et eum atque quis ab
        voluptas temporibus dolore voluptatibus. Eaque, cum ea. At accusamus,
        similique nulla debitis ea, accusantium expedita necessitatibus eum
        doloremque quasi enim repudiandae molestias quae unde distinctio
        laudantium. Ducimus natus at corrupti, libero alias inventore harum
        excepturi laudantium laboriosam! Mollitia tenetur rem neque distinctio
        blanditiis consequuntur nam repellendus excepturi, ratione quasi
        veritatis ullam eos quae culpa sapiente facere ipsam nemo, quis, sint in
        obcaecati dignissimos officia hic velit. Odit! Quos qui magnam ipsum
        odio facilis, nihil, autem nisi sunt illum iste repellendus voluptas
        architecto vero eos aperiam eum recusandae dolorum fugit quibusdam
        tenetur non quidem laboriosam! Blanditiis, eligendi repudiandae!
        Officiis est id, at fuga expedita nemo error sequi odit sunt soluta quam
        quidem porro eius necessitatibus. Assumenda temporibus dolor, eos
        eligendi minima dicta, a commodi, incidunt natus at facere? Repellat,
        qui. Nemo reprehenderit porro consectetur reiciendis adipisci et,
        voluptatem dolor modi dignissimos odio molestias fugiat soluta maiores,
        beatae quasi possimus, animi at magnam? Reprehenderit commodi quidem
        voluptas dolore eaque. Ipsum vero praesentium totam unde harum vel natus
        dignissimos ut, rerum dolores, perspiciatis laboriosam, exercitationem
        aliquid culpa debitis cum veniam neque suscipit aspernatur dolorum
        laborum! Nostrum voluptatum aperiam officiis optio. Dolor aut nostrum
        aspernatur. Quis fuga atque voluptas repudiandae, cumque accusamus
        nesciunt, voluptates dolor, laborum distinctio aperiam soluta? Explicabo
        odio quod impedit possimus, saepe quia! Praesentium pariatur atque est
        impedit! Itaque, illum facere. Enim error corporis iure doloribus
        eveniet, ad beatae blanditiis aut minus maxime maiores quaerat quo eum
        consectetur unde sed eos sit sapiente accusamus. Expedita nemo aut
        cupiditate.
       </div>
      </div>
     </PortalModal>
    )}
   </div>
  </div>
 );
};
export default Form;
