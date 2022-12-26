import { auth } from "@/firebase/config";
import { ref } from "vue";

let error = ref(null);

// let createAccount = async (email, password, displayName) => {
//   try {
//     let res = await auth.createUserWithEmailAndPassword(email, password);
//     if (!res) {
//       throw new Error("could not create new user");
//     }
//     res.user.updateProfile({ displayName: displayName });
//     return res;
//     console.log(res.user);
//   } catch (err) {
//     error.value = err.message;
//     // console.log(error.value);
//   }
// };

let createAccount = async (email, password, name) => {
  try {
    let res = await auth.createUserWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error("could not create a new user");
    }
    res.user.updateProfile({ displayName: name });
    return res;
  } catch (err) {
    error.value = err.message;
  }
};

let useSignup = () => {
  return { error, createAccount };
};

export default useSignup;
