import { atom } from "recoil";

const examinerAtom = atom({
    key: "examinerAtom",
    default: JSON.parse(localStorage.getItem("examiner-cleanings")),
    effects: [
        ({ onSet }) => {
        onSet((newValue) => {
            if (newValue) {
            localStorage.setItem("examiner-cleanings", JSON.stringify(newValue));
            }
        });
        },
    ],
})

export default examinerAtom