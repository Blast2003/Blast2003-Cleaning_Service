import { useSetRecoilState } from "recoil";
import examinerAtom from "../atom/examinerAtom";

const useExaminerLogout = () => {
    const setExaminer = useSetRecoilState(examinerAtom);
    // const showToast = userShowToast()
    const logout = async() =>{
        try {
          //fetch
            const res = await fetch("/api/examiner/logout", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
            })
            const data = await res.json()
            console.log(data)
            if(data.error){
                console.log("Error detected:", data.error)
                // showToast("Error", data.error, "error")
                return;
            }

            localStorage.removeItem("examiner-cleanings")
            setExaminer (null);

        } catch (error) {
            // showToast("Error", error, "error")
        }
    }

    return logout
}

export default useExaminerLogout