import { atom } from "recoil";

const staffAtom = atom({
    key: "staffAtom",
    default: JSON.parse(localStorage.getItem("staff-cleanings"))
})

export default staffAtom