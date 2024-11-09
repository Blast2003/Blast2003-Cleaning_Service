import { atom } from "recoil";

const customerAtom = atom({
    key: "customerAtom",
    default: JSON.parse(localStorage.getItem("user-threads"))
})

export default customerAtom