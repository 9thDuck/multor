import { formInputName } from "./components/FormAndBenefitsSection/components/Form/formSlice";

export const getPlaceholder = (inputName: formInputName) => {
 const inputNameSplitArr: string[] = inputName.split("");
 inputNameSplitArr[0] = inputNameSplitArr[0].toUpperCase();
 const wordsArr = [];

 for (let i = 0; i < inputNameSplitArr.length; i++) {
  if (inputNameSplitArr[i] !== inputNameSplitArr[i].toUpperCase()) continue;
  if (i > 0) {
   wordsArr.push(inputNameSplitArr.splice(0, i).join(""));
   i = 0;
  }
 }

 if (inputNameSplitArr.length) wordsArr.push(inputNameSplitArr.join(""));

 return wordsArr.join(" ");
};
