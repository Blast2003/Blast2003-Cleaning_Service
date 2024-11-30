import { atom } from "recoil";

const staffAtom = atom({
    key: "staffAtom",
    default: JSON.parse(localStorage.getItem("staff-cleanings")),
    effects: [
        ({ onSet }) => {
        onSet((newValue) => {
            if (newValue) {
            localStorage.setItem("staff-cleanings", JSON.stringify(newValue));
            }
        });
        },
    ],
})

export default staffAtom