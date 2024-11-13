import { atom } from "recoil";

const examinerAtom = atom({
    key: "examinerAtom",
    default: JSON.parse(localStorage.getItem("examiner-cleanings"))
})

export default examinerAtom