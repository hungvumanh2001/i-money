import { ref } from "vue";
import { projectAuth } from "@/configs/firebase.js";

const error = ref(null);
const isPending = ref(false);

async function signUp(email, password, fullname) {
  isPending.value = true;
  error.value = null;
  try {
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!response) throw new Error("Could not create a new user");

    await response.user.updateProfile({ displayName: fullname });
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    // error.value = null;
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signUp };
}
