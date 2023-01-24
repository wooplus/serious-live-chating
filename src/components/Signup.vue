<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="display name" v-model="name" />
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup";
export default {
  setup(props, context) {
    let name = ref("");
    let email = ref("");
    let password = ref("");
    let { error, createAccount } = useSignup();
    let signUp = async () => {
      if (name) {
      }
      let res = await createAccount(email.value, password.value, name.value);
      res.user.updateProfile({ displayName: name.value });
      if (res) {
        context.emit("enterChatroom");
      }
    };
    return { name, email, password, signUp, error };
  },
};
</script>

<style></style>
