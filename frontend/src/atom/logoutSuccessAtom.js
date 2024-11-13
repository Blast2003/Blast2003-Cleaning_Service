import { atom } from "recoil";

const logoutSuccessAtom = atom({
  key: "logoutSuccess",
  default: false,
});

export default logoutSuccessAtom;
