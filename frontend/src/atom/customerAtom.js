import { atom } from "recoil";

const customerAtom = atom({
    key: "customerAtom",
    default: JSON.parse(localStorage.getItem("user-cleanings"))
})

export default customerAtom