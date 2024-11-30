import { atom } from "recoil";

const customerAtom = atom({
    key: "customerAtom",
    default: JSON.parse(localStorage.getItem("user-cleanings")),
    effects: [
        ({ onSet }) => {
        onSet((newValue) => {
            if (newValue) {
            localStorage.setItem("user-cleanings", JSON.stringify(newValue));
            }
        });
        },
    ],
})

export default customerAtom