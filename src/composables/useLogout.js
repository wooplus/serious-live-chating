import { ref } from "vue";
import { auth } from "@/firebase/config";

let error = ref(null);

let signOut = async () => {
  try {
    let res = await auth.signOut();
    console.log("user log out");
    return res;
  } catch (err) {
    error.value = err.message;
  }
};

let useLogout = () => {
  return { signOut, error };
};

export default useLogout;
