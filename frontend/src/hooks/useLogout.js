import { useSetRecoilState } from "recoil";
import customerAtom from "../atom/customerAtom";

const useLogout = () => {
    const setUser = useSetRecoilState(customerAtom);
    // const showToast = userShowToast()
    const logout = async() =>{
        try {
          //fetch
            const res = await fetch("/api/user/logout", {
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

            localStorage.removeItem("user-cleanings")
            setUser (null);

        } catch (error) {
            // showToast("Error", error, "error")
        }
    }

    return logout
}

export default useLogout