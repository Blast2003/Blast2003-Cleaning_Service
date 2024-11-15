import { atom } from "recoil";

const contractAtom = atom({
  key: "contractAtom",
  // store to save the object when navigate to another page
  // when create another one => will replace the older one
  default: JSON.parse(localStorage.getItem("contract-cleanings")) 
});

export default contractAtom