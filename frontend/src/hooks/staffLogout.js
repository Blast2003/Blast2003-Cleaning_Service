import { useSetRecoilState } from "recoil";
import staffAtom from "../atom/staffAtom";

const useStaffLogout = () => {
    const setStaff = useSetRecoilState(staffAtom);
    // const showToast = userShowToast()
    const logout = async() =>{
        try {
          //fetch
            const res = await fetch("/api/staff/logout", {
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

            localStorage.removeItem("staff-cleanings")
            setStaff (null);

        } catch (error) {
            // showToast("Error", error, "error")
        }
    }

    return logout
}

export default useStaffLogout